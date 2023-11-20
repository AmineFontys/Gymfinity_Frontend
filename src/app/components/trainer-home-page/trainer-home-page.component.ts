import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../Services/trainer.service';
import { TrainerModel } from '../../Models/trainer-model';

@Component({
  selector: 'app-trainer-home-page',
  templateUrl: './trainer-home-page.component.html',
  styleUrls: ['./trainer-home-page.component.css']
})
export class TrainerHomePageComponent implements OnInit {
  trainers: TrainerModel[] = [];

  constructor(private trainerService: TrainerService) { }

  ngOnInit(): void {
    this.getAllTrainers();
  }

  getAllTrainers(): void {
    this.trainerService.getAllTrainers().subscribe(trainers => {
      this.trainers = trainers;
    });
  }
}
