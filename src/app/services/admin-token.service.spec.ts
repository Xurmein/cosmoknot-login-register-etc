import { TestBed } from '@angular/core/testing';

import { AdminTokenService } from './admin-token.service';

describe('AdminTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminTokenService = TestBed.get(AdminTokenService);
    expect(service).toBeTruthy();
  });
});
