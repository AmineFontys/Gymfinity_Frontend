import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TrainerService } from '../../Services/trainer.service';
import { TrainerModel } from '../../Models/trainer-model';
import { MemberModel } from '../../Models/member-model';
import { MemberService } from '../../Services/member.service';
import { ExerciseModel } from 'src/app/Models/exercise-model';
import { ExerciseService } from 'src/app/Services/exercise.service';
import { createExerciseModel } from 'src/app/Models/createExercise-model';

@Component({
  selector: 'app-trainer-management',
  templateUrl: './trainer-management.component.html',
  styleUrls: ['./trainer-management.component.css']
})
export class TrainerManagementComponent {
  trainers: TrainerModel[] = [];


constructor(
  private trainerService: TrainerService,
  private cdr: ChangeDetectorRef
) {}

ngOnInit(): void {
  this.getAllTrainers();
  
  
}
getAllTrainers(): void {
  this.trainerService.getAllTrainers().subscribe(
    (trainers) => {
      this.trainers = trainers;
      console.log('trainers: ', this.trainers);
      this.cdr.detectChanges();
    },
    (error) => {
      console.error('Error fetching trainers:', error);
      // Handle the error or show a user-friendly message
    }
  );
}

}
