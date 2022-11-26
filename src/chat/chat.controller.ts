import {
  Get,
  Delete,
  Post,
  Put,
  Controller,
  Req,
  UseGuards,
  Param,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RequestWithUser } from 'src/user/types/requestWithUser.interface';
import { AuthorGuard } from './author.guard';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create.chat.dto';
import { UpdateChatDto } from './dto/update.chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get(':id')
  @UseGuards(JwtAuthGuard, AuthorGuard)
  async getChat(@Param('id') id: string) {
    return this.chatService.getChatById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createChat(@Body() chat: CreateChatDto, @Req() req: RequestWithUser) {
    return this.chatService.createChat(chat, req.user);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, AuthorGuard)
  async updateChat(@Body() chat: UpdateChatDto, @Param('id') id: string) {
    return this.chatService.updateChat(id, chat);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, AuthorGuard)
  async removeChat(@Param('id') id: string) {
    return this.chatService.removeChat(id);
  }
}
