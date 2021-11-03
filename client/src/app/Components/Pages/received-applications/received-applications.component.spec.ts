import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedApplicationsComponent } from './received-applications.component';

describe('ReceivedApplicationsComponent', () => {
  let component: ReceivedApplicationsComponent;
  let fixture: ComponentFixture<ReceivedApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivedApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
