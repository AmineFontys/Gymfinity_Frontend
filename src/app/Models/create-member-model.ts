export class createMember {
    firstName: string;
    surName: string;
    birthDate: Date;
    isMale: boolean;
    phoneNumber: string;
    email: string;
    password: string;
    passwordHash: string;

    constructor(name: string, surname: string, birthdate: Date, isMale: boolean, phonenumber: string, email: string, password: string, passwordHash: string) {
        this.firstName = name;
        this.surName = surname;
        this.birthDate = birthdate;
        this.isMale = isMale;
        this.phoneNumber = phonenumber;
        this.email = email;
        this.password = password;
        this.passwordHash = passwordHash;

    }

    
}
