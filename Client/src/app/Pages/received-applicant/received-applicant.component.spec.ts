import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedApplicantComponent } from './received-applicant.component';

describe('ReceivedApplicantComponent', () => {
  let component: ReceivedApplicantComponent;
  let fixture: ComponentFixture<ReceivedApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivedApplicantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
