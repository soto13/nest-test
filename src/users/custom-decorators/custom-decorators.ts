import { createParamDecorator } from "@nestjs/common";

const User = createParamDecorator((DataCue, req) => req.body);

export { User };
