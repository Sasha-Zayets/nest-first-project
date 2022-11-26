import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IdDoc } from 'src/common/types/global.types';
import { User } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';
import { CHAT_DOCUMENT_NAME } from './chat.constants';
import { CreateChatDto } from './dto/create.chat.dto';
import { UpdateChatDto } from './dto/update.chat.dto';
import { Chat, ChatDocument } from './models/chat.model';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(CHAT_DOCUMENT_NAME)
    private readonly chatModel: Model<ChatDocument>,
    @Inject(UserService) private readonly userService: UserService,
  ) {}

  async getChatById(chatId: string): Promise<Chat> {
    return await this.chatModel.findById(chatId);
  }

  async createChat(chat: CreateChatDto, user: User): Promise<Chat> {
    return await this.chatModel.create({
      name: chat.name,
      author: user._id,
      users: [user._id],
    });
  }

  async updateChat(idChat: string, chat: UpdateChatDto): Promise<Chat> {
    return await this.chatModel.findOneAndUpdate({ _id: idChat }, chat, {
      new: true,
    });
  }

  async removeChat(id: string) {
    return await this.chatModel.deleteOne({ _id: id });
  }

  async checkWhetherUserIsAuthorChat(
    userId: IdDoc,
    chatId: string,
  ): Promise<boolean> {
    const chat = await this.chatModel.findById(chatId);

    return chat.author.equals(userId);
  }

  async addUserToChat(email: string, chatId: string): Promise<Chat> {
    const user = await this.userService.findByUserEmail(email);

    if (!user) {
      throw new NotFoundException(`User with email:${email} not found`);
    }

    const chat = await this.chatModel.findById(chatId);

    if (chat.users.includes(user._id)) {
      throw new ConflictException(`User with email:${email} not added to chat`);
    }

    const users = [...chat.users, user._id];
    return await this.chatModel.findOneAndUpdate(
      { _id: chatId },
      {
        ...chat,
        users,
      },
      { new: true },
    );
  }

  async removeUserWithChat(idUser: IdDoc | string, chatId: string) {
    const chat = await this.chatModel.findById(chatId);
    const users = chat.users.filter((id) => id !== idUser);

    return await this.chatModel.findOneAndUpdate(
      { _id: chatId },
      {
        ...chat,
        users,
      },
      { new: true },
    );
  }
}
