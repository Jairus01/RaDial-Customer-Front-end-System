import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RApplicantListComponent } from './r-applicant-list.component';

describe('RApplicantListComponent', () => {
  let component: RApplicantListComponent;
  let fixture: ComponentFixture<RApplicantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RApplicantListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RApplicantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
