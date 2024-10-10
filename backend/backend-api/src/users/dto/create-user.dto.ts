export class CreateUserDto {
  username: string;
  phone: string;
  profile: CreateProfileDto;
}

export class CreateProfileDto {
  email: string;
  gender: string;
  address: string;
  pincode: string;
  city: string;
  state: string;
  country: string;
}
