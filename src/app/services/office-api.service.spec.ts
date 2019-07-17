import { TestBed } from '@angular/core/testing';

import { OfficeApiService } from './office-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('OfficeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: OfficeApiService = TestBed.get(OfficeApiService);
    expect(service).toBeTruthy();
  });
});
