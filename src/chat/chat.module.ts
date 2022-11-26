import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { ChatSchema } from './models/chat.model';
import { ChatController } from './chat.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'chats', schema: ChatSchema }])],
  controllers: [ChatController],
  providers: [ChatService, ChatGateway],
})
export class ChatModule {}
