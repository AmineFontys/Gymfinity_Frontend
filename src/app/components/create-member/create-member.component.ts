import { Component } from '@angular/core';
import { createMember } from 'src/app/Models/create-member-model';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent {
  createMember: createMember = {
    firstName: '',
    surName: '',
    birthDate: new Date('18-10-1995'),
    isMale: false,
    phoneNumber: '',
    email: '',
    password: '',
    passwordHash: '',
  };
  
  constructor(private memberService: MemberService) { }


createNewMember(){

  this.createMember.birthDate = new Date(this.createMember.birthDate);
  this.memberService.createMember(this.createMember).subscribe(
    (response) => {
      console.log('Member created succesfully: ',response);
      
    },
    (error) => {
      console.error('Error creating new member:', error);
      console.log('Member:', this.createMember);
      if (error.error && error.error.errors) {
        // Display validation errors to the user
        console.log('Validation errors:', error.error.errors);
      }
    }
  );
  
}
}
