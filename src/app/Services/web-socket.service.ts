import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private hubConnection: HubConnection;
  messageReceived: Subject<string> = new Subject<string>();

  constructor() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:5000/ChatHub')
      .build();

    this.hubConnection.on('ReceiveMessage', (message: string) => {
      console.log('Received message:', message);
      this.messageReceived.next(message);
    });

    this.hubConnection.start()
      .then(() => console.log('Connection started'))
      .catch(err => console.error('Error while starting connection: ' + err));
  }

  sendMessage(message: string): void {
    this.hubConnection.invoke('SendMessage', message)
      .catch(err => console.error(err));
  }

  closeConnection(): void {
    this.hubConnection.stop();
  }
}