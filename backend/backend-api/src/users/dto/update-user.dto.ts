export class UpdateUserDto {
  username?: string;
  phone?: string;
  profile?: UpdateProfileDto;
}

export class UpdateProfileDto {
  email?: string;
  gender?: string;
  address?: string;
  pincode?: string;
  city?: string;
  state?: string;
  country?: string;
}
