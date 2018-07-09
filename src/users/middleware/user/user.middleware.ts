import { HttpStatus, Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      res.locals.saludo = 'soy un middleware'
      next();
    };
  }
}

@Injectable()
export class UserIsOldMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      if (req.body.age >= 18) {
        return next();
      } else {
        return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Usuario debe ser mayor de edad' })
      }
    };
  }
}
