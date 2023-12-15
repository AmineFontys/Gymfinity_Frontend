import { Component, OnInit, inject } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  chatService = inject(ChatService);
  inputMessage = "";
  messages: any[] = [];
  router = inject(Router);

  ngOnInit(): void {
    this.chatService.messages$.subscribe(response => {
      this.messages = response;
      console.log(this.messages)
  });
}

sendMessage() {
  this.chatService.sendMessage(this.inputMessage)
  .then(() => {
    this.inputMessage = '';
  }).catch((err) => {
    console.log("erorro:" ,err);
  })
}

leaveChat() {
  this.chatService.leaveChat()
  .then(() => {
    this.router.navigate(['welcome']);
  }).catch((err) => {
    console.log(err);
  })
}
}
