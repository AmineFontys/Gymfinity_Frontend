// exercise.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExerciseModel } from '../Models/exercise-model'; // Assuming you have an ExerciseModel defined

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiUrl = 'https://localhost:5000';

  constructor(private http: HttpClient) { }

  getAllExercises(): Observable<ExerciseModel[]> {
    return this.http.get<ExerciseModel[]>(`${this.apiUrl}/api/exercise`);
  }

  getExerciseById(id: string): Observable<ExerciseModel> {
    return this.http.get<ExerciseModel>(`${this.apiUrl}/api/exercise/${id}`);
  }

  createExercise(exercise: ExerciseModel): Observable<ExerciseModel> {
    return this.http.post<ExerciseModel>(`${this.apiUrl}/api/exercise`, exercise);
  }

  updateExercise(id: string, exercise: ExerciseModel): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/api/exercise/${id}`, exercise);
  }

  deleteExercise(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/exercise/${id}`);
  }
}
