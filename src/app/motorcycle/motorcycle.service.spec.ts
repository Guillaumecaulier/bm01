import { TestBed } from '@angular/core/testing';

import { MotorcyleService } from './motorcyle.service';

describe('MotorcyleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotorcyleService = TestBed.get(MotorcyleService);
    expect(service).toBeTruthy();
  });
});
