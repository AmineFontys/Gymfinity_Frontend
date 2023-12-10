import { Guid } from 'guid-typescript';

export interface MemberModel {
  id: Guid;
  firstName: string;
  surname: string;
  birthdate: Date;
  isMale: boolean;
  phoneNumber: string;
}
