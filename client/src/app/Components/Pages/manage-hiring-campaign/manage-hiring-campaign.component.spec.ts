import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHiringCampaignComponent } from './manage-hiring-campaign.component';

describe('ManageHiringCampaignComponent', () => {
  let component: ManageHiringCampaignComponent;
  let fixture: ComponentFixture<ManageHiringCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageHiringCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHiringCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
