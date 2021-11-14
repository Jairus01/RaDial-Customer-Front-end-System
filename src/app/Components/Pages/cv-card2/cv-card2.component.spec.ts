import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCard2Component } from './cv-card2.component';

describe('CvCard2Component', () => {
  let component: CvCard2Component;
  let fixture: ComponentFixture<CvCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvCard2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
