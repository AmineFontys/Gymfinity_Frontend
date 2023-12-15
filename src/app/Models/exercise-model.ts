import { Guid } from 'guid-typescript';

export interface ExerciseModel {
  id: Guid;
  name: string;
  muscleGroup: string;
  description: string;
  reps: number;
  sets: number;
  weight: number;
  restTime: number;
  duration: number;
}
