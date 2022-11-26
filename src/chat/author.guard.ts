import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from '@nestjs/common';
import { RequestWithUser } from 'src/user/types/requestWithUser.interface';
import { ChatService } from './chat.service';

@Injectable()
export class AuthorGuard implements CanActivate {
  constructor(@Inject(ChatService) private readonly chatService: ChatService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest() as RequestWithUser;
    const { user } = request;

    if (!user) {
      return false;
    }

    const { id } = request.params;
    return this.chatService.checkWhetherUserIsAuthorChat(user._id, id);
  }
}
