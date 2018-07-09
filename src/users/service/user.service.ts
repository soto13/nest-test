import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";

@Injectable()

export class UserService {

  constructor() {}
  
  getUser(saludo): Object {
    return { message: 'Hola usuario', saludo };
  }

  saveUser(user: CreateUserDto): Promise<CreateUserDto> {
    return (user.username) ? Promise.resolve(user) : Promise.reject({ message: 'username es un campo requerido' });
    // return (user.username) ? user : { message: 'username es un campo requerido', status: 400 };
  }
}
