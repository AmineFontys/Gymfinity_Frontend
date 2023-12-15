import { Injectable } from '@angular/core';
import  * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public connection: signalR.HubConnection = new signalR.HubConnectionBuilder()
  .withUrl('http://localhost:5000/chat')
  .configureLogging(signalR.LogLevel.Information)
  .build()

  public messages$ = new BehaviorSubject<any>([]);
  public connectedUsers$ = new BehaviorSubject<string[]>([]);
  public messages: any[] = [];
  public users : string[] = [];


  constructor() { 
    this.start();
    this.connection.on("ReceiveMessage", (user: string, message: string, messageTime: string) => {
      
      this.messages = [...this.messages, {user, message, messageTime}];
      this.messages$.next(this.messages);
    });
    this.connection.on("ConnectedUser", (users : any) => {
      this.connectedUsers$.next(users);
    });
  }
  


  ///start connection

  public async start(){
    try {
      await this.connection.start()
      console.log("Connected")
    } catch (error) {
      console.log(error)
    }
  }

  ///join group

  public async joinRoom(user : string, room : string){
    console.log("ussser: ", user)
    return this.connection.invoke("JoinRoom", {user, room})
    

  }
  ///send message
  public async sendMessage(message : string){
    return this.connection.invoke("SendMessage", {message})
  }
  //leave chat
  public async leaveChat(){
    return this.connection.stop()
  }
}