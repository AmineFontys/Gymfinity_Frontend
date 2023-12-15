import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TrainerService } from '../../Services/trainer.service';
import { TrainerModel } from '../../Models/trainer-model';
import { MemberModel } from '../../Models/member-model';
import { MemberService } from '../../Services/member.service';
import { ExerciseModel } from 'src/app/Models/exercise-model';
import { ExerciseService } from 'src/app/Services/exercise.service';
import { createExerciseModel } from 'src/app/Models/createExercise-model';
import { Guid } from 'guid-typescript';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-trainer-home-page',
  templateUrl: './trainer-home-page.component.html',
  styleUrls: ['./trainer-home-page.component.css']
})
export class TrainerHomePageComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  trainers: TrainerModel[] = [];
  members: MemberModel[] = [];
  exercises: ExerciseModel[] = [];
  showTrainerInfo: boolean = false;
  ShowMemberInfo: boolean = false;
  showCreateExercise: boolean = false;
  createExerciseModel: createExerciseModel = {
    name: '',
    muscleGroup: '',
    description: '',
    reps: 0,
    sets: 0,
    weight: 0,
    restTime: 0,
    duration: 0
  };
  newExercise: createExerciseModel = {
    name: '',
    muscleGroup: '',
    description: '',
    reps: 0,
    sets: 0,
    weight: 0,
    restTime: 0,
    duration: 0
  };

  constructor(
    private trainerService: TrainerService,
    private memberService: MemberService,
    private exerciseService: ExerciseService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllTrainers();
    this.getAllMembers();
    this.getAllExercises();
    
    
  }

  getAllExercises(): void {
    this.exerciseService.getAllExercises().subscribe(
      (exercises) => {
        this.exercises = exercises;
        console.log('exercises: ', this.exercises);
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching exercises:', error);
        // Handle the error or show a user-friendly message
      }
    );
  }

  getAllMembers(): void {
    this.memberService.getAllMembers().subscribe(
      (members) => {
        this.members = members;
        console.log('members: ', this.members);
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching members:', error);
        // Handle the error or show a user-friendly message
      }
    );
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

  createExercise() {
    // Call your exercise service to add the new exercise

    

    this.exerciseService.createExercise(this.newExercise).subscribe(
      (response) => {
        // Handle success (e.g., show a success message, update the list of exercises)
        console.log('Exercise created successfully:', response);
      },
      (error) => {
        // Handle error (e.g., show an error message)
        console.error('Errorrrrrrrrrrrrr creating exercise:', error);
        console.log('Exercise:', this.newExercise);
      }
    );

    
  }

  toggleTrainerInfoVisibility() {
    this.showTrainerInfo = !this.showTrainerInfo;
  }

  toggleMemberInfoVisibility() {
    this.ShowMemberInfo = !this.ShowMemberInfo;
  }
  toggleCreateExerciseVisibility() {
    this.showCreateExercise = !this.showCreateExercise;
  }
}
