import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvListingComponent } from './cv-listing.component';

describe('CvListingComponent', () => {
  let component: CvListingComponent;
  let fixture: ComponentFixture<CvListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
