import { TestBed, inject } from '@angular/core/testing';

import { AsperaService } from './aspera.service';

describe('AsperaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsperaService]
    });
  });

  it('should be created', inject([AsperaService], (service: AsperaService) => {
    expect(service).toBeTruthy();
  }));
});
