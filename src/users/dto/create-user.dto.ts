export class CreateUserDto {
  readonly firstname: String;
  readonly lastname: String;
  readonly maritalstatus: String;
  readonly age: Number;
  readonly username: String;
  readonly status?: Number;
}