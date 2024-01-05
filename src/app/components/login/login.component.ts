import { Component } from '@angular/core';
import { LoginModel } from 'src/app/Models/login-model';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginModel: LoginModel = {
  email: '',
  password: '',
};

constructor(private authenticationService: AuthenticationService) { }

login(){
  console.log('LoginModel:', this.loginModel);
  this.authenticationService.AuthenticateMember(this.loginModel).subscribe(
    (response) => {
      console.log('Login succesful: ',response);
    },
    (error) => {
      console.error('Error logging in:', error);
      console.log('LoginModel:', this.loginModel);
      if (error.error && error.error.errors) {
        // Display validation errors to the user
        console.log('Validation errors:', error.error.errors);
      }
    }
  );
  }
}
