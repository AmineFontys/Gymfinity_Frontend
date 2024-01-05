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


}
  

