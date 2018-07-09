import { Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { User } from "../custom-decorators/custom-decorators";
import { CreateUserDto } from "../dto/create-user.dto";
import { UserService } from "../service/user.service";

@Controller('user')

export class UserController {
  
  constructor(private readonly userService: UserService) { }

  @Get()
  getUser(@Res() res): Object {
    return res.status(HttpStatus.OK).json(this.userService.getUser(res.locals.saludo));
  }

  @Post()
  async saveUser(@User() createUserDto: CreateUserDto, @Res() res) {
    return this.userService.saveUser(createUserDto)
      .then((success) => res.status(HttpStatus.CREATED).json(success))
      .catch((err) => res.status(HttpStatus.BAD_REQUEST).json(err))
  }
}
