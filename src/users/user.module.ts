import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UserIsOldMiddleware, UserMiddleware } from "./middleware/user/user.middleware";
import { UserPipe } from "./pipes/user/user.pipe";
import { UserService } from "./service/user.service";
import { UserController } from "./user/user.controller";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserPipe],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .exclude({ path: 'user', method: RequestMethod.POST })
      .forRoutes(UserController)
      .apply(UserIsOldMiddleware)
      .exclude({ path: 'user', method: RequestMethod.GET })
      .forRoutes(UserController)
  }
}

