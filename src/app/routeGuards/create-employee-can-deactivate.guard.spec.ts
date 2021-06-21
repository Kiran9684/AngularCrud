import { TestBed } from '@angular/core/testing';

import { CreateEmployeeCanDeactivateGuard } from './create-employee-can-deactivate.guard';

describe('CreateEmployeeCanDeactivateGuard', () => {
  let guard: CreateEmployeeCanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateEmployeeCanDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
