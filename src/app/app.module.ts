import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrainerHomePageComponent } from './components/trainer-home-page/trainer-home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateMemberComponent } from './components/create-member/create-member.component';
import { TrainerManagementComponent } from './components/trainer-management/trainer-management.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepagememberComponent } from './homepagemember/homepagemember.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    TrainerHomePageComponent,
    ChatComponent,
    JoinRoomComponent,
    WelcomeComponent,
    CreateMemberComponent,
    TrainerManagementComponent,
    LoginComponent,
    RegisterComponent,
    HomepagememberComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
