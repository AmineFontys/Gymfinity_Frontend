// trainer.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainerModel } from '../Models/trainer-model';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private apiUrl = 'https://localhost:5000'; 
  private wsSubject: WebSocketSubject<any> | undefined;

  constructor(private http: HttpClient) { }
  private createWebSocketConnection(): WebSocketSubject<any> {
    return webSocket(`${this.apiUrl}/api/trainer/ws`);
  }
  getAllTrainers(): Observable<TrainerModel[]> {
    return this.http.get<TrainerModel[]>(`${this.apiUrl}/api/trainer`);
  }

  getTrainerById(id: string): Observable<TrainerModel> {
    return this.http.get<TrainerModel>(`${this.apiUrl}/api/trainer/${id}`);
  }

  createTrainer(trainer: TrainerModel): Observable<TrainerModel> {
    return this.http.post<TrainerModel>(`${this.apiUrl}/api/trainer`, trainer);
  }

  updateTrainer(id: string, trainer: TrainerModel): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/api/trainer/${id}`, trainer);
  }

  deleteTrainer(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/trainer/${id}`);
  }

  connectWebSocket(): Observable<any> {
    this.wsSubject = this.createWebSocketConnection();
    return this.wsSubject.asObservable();
  }

  sendWebSocketMessage(message: any): void {
    if (this.wsSubject) {
      this.wsSubject.next(message);
    }
  }

  closeWebSocketConnection(): void {
    if (this.wsSubject) {
      this.wsSubject.complete();
    }
  }
}
  

