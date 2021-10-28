import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyShortlistComponent } from './vacancy-shortlist.component';

describe('VacancyShortlistComponent', () => {
  let component: VacancyShortlistComponent;
  let fixture: ComponentFixture<VacancyShortlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyShortlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyShortlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
