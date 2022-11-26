import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { USER_DOCUMENT_NAME } from './user.constants';
import { UserSchema } from './user.model';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: USER_DOCUMENT_NAME, schema: UserSchema },
    ]),
  ],
  providers: [UserService],
  exports: [UserService],
  controllers: [],
})
export class UserModule {}
