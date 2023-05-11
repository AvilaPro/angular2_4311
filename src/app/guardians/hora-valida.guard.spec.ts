import { TestBed } from '@angular/core/testing';

import { HoraValidaGuard } from './hora-valida.guard';

describe('HoraValidaGuard', () => {
  let guard: HoraValidaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HoraValidaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
