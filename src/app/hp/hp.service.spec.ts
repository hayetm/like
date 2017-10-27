import { TestBed, inject } from '@angular/core/testing';

import { HpService } from './hp.service';

describe('HpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HpService]
    });
  });

  it('should be created', inject([HpService], (service: HpService) => {
    expect(service).toBeTruthy();
  }));
});
