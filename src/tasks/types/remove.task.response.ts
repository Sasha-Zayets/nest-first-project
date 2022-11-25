import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RemoveTask {
  @Field()
  completed: boolean;
}
