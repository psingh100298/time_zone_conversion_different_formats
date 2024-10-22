import { TestBed } from '@angular/core/testing';

import { TimeconversionService } from './timeconversion.service';

describe('TimeconversionService', () => {
  let service: TimeconversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeconversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
