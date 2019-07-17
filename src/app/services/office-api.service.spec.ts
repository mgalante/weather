import { TestBed } from '@angular/core/testing';

import { OfficeApiService } from './office-api.service';

describe('OfficeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfficeApiService = TestBed.get(OfficeApiService);
    expect(service).toBeTruthy();
  });
});
