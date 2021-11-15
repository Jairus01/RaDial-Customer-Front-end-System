import { TestBed } from '@angular/core/testing';

import { ReceivedApplicantService } from './received-applicant.service';

describe('ApplicantService', () => {
  let service: ReceivedApplicantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceivedApplicantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
