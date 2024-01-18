import { TestBed } from '@angular/core/testing';

import { DataElementServiceService } from './data-element.service';

describe('DataElementServiceService', () => {
  let service: DataElementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataElementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
