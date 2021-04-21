import { TestBed } from '@angular/core/testing';

import { AuthUService } from './auth-u.service';

describe('AuthUService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthUService = TestBed.get(AuthUService);
    expect(service).toBeTruthy();
  });
});
