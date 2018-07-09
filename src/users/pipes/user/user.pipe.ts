import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';

@Injectable()
export class UserPipe implements PipeTransform {
  async transform(user: CreateUserDto, metadata: ArgumentMetadata) {
    console.log(user)

    return (user.age > 18) ? console.log('mayor de edad, es permitido') : { message: 'Usuario es menor de edad' };
  }
}
