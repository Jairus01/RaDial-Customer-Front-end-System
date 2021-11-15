import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewScheduleDialogComponent } from './interview-schedule-dialog.component';

describe('InterviewScheduleDialogComponent', () => {
  let component: InterviewScheduleDialogComponent;
  let fixture: ComponentFixture<InterviewScheduleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewScheduleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewScheduleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
