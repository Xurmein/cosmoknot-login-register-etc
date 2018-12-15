import { TestBed } from '@angular/core/testing';

import { SessionTokenService } from './sessionToken.service';

describe('SessionTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionTokenService = TestBed.get(SessionTokenService);
    expect(service).toBeTruthy();
  });
});
