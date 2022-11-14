import { IsMongoId } from 'class-validator';

class IdMongoDbParams {
  @IsMongoId({
    message: 'Param id in not valid',
  })
  id: string;
}

export default IdMongoDbParams;
