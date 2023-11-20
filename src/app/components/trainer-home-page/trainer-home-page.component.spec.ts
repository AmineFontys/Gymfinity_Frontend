import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainerHomePageComponent } from './trainer-home-page.component';

describe('TrainerHomePageComponent', () => {
  let component: TrainerHomePageComponent;
  let fixture: ComponentFixture<TrainerHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerHomePageComponent]
    });
    fixture = TestBed.createComponent(TrainerHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
