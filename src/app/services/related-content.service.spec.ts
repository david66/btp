import { TestBed, inject } from '@angular/core/testing';

import { RelatedContentService } from './related-content.service';

describe('RelatedContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RelatedContentService]
    });
  });

  it('should be created', inject([RelatedContentService], (service: RelatedContentService) => {
    expect(service).toBeTruthy();
  }));
});
