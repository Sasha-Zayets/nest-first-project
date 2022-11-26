import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/user.model';
import { CreateChatDto } from './dto/create.chat.dto';
import { UpdateChatDto } from './dto/update.chat.dto';
import { Chat, ChatDocument } from './models/chat.model';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel('chats') private readonly chatModel: Model<ChatDocument>,
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
}
