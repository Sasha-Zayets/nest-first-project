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
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create.chat.dto';
import { UpdateChatDto } from './dto/update.chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getChat(@Param('id') id: string) {
    return this.chatService.getChatById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createChat(
    @Body('chat') chat: CreateChatDto,
    @Req() req: RequestWithUser,
  ) {
    return this.chatService.createChat(chat, req.user);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateChat(@Body('chat') chat: UpdateChatDto, @Param('id') id: string) {
    return this.chatService.updateChat(id, chat);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async removeChat(@Param('id') id: string) {
    return this.chatService.removeChat(id);
  }
}
