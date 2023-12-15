import { Guid } from 'guid-typescript';

export class createExerciseModel {
  
  name: string;
  muscleGroup: string;
  description: string;
  reps: number;
  sets: number;
  weight: number;
  restTime: number;
  duration: number;

  constructor(id: Guid, name: string, muscleGroup: string, description: string, reps: number, sets: number, weight: number, restTime: number, duration: number) {
    
    this.name = name;
    this.muscleGroup = muscleGroup;
    this.description = description;
    this.reps = reps;
    this.sets = sets;
    this.weight = weight;
    this.restTime = restTime;
    this.duration = 0;
  }

  // Additional methods can be added here
}


