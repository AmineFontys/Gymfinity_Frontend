import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrainerHomePageComponent } from './components/trainer-home-page/trainer-home-page.component';
import { ChatComponent } from './chat/chat.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateMemberComponent } from './components/create-member/create-member.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'trainer-home-page', component: TrainerHomePageComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'join-room', component: JoinRoomComponent },
  { path: 'welcome', component: WelcomeComponent }, 
  { path: 'home', component: HomeComponent },
  { path: 'create-member', component: CreateMemberComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
