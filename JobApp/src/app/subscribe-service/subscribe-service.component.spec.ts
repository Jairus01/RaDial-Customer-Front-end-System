import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeServiceComponent } from './subscribe-service.component';

describe('SubscribeServiceComponent', () => {
  let component: SubscribeServiceComponent;
  let fixture: ComponentFixture<SubscribeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
