import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagememberComponent } from './homepagemember.component';

describe('HomepagememberComponent', () => {
  let component: HomepagememberComponent;
  let fixture: ComponentFixture<HomepagememberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepagememberComponent]
    });
    fixture = TestBed.createComponent(HomepagememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
