import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): Object {
    return { message: 'Nest API is working' };
  }
}
