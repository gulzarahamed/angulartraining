import { TestBed, async, inject } from '@angular/core/testing';

import { HelloGuard } from './hello.guard';

describe('HelloGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelloGuard]
    });
  });

  it('should ...', inject([HelloGuard], (guard: HelloGuard) => {
    expect(guard).toBeTruthy();
  }));
});
