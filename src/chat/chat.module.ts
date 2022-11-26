import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { ChatSchema } from './models/chat.model';
import { ChatController } from './chat.controller';
import { AuthorGuard } from './author.guard';
import { CHAT_DOCUMENT_NAME } from './chat.constants';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([
      { name: CHAT_DOCUMENT_NAME, schema: ChatSchema },
    ]),
  ],
  controllers: [ChatController],
  providers: [ChatService, AuthorGuard, ChatGateway],
})
export class ChatModule {}
