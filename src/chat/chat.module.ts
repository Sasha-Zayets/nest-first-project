import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';

@Module({
  controllers: [],
  providers: [ChatService, ChatGateway],
})
export class ChatModule {}
