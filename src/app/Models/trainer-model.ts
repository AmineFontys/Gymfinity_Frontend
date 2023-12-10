import { Guid } from "guid-typescript";

export interface TrainerModel {
    id: Guid;
    firstName: string;
    surName: string;
    birthdate: Date;
    isMale: boolean;
    phoneNumber: string;
  }
