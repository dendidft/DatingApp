/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlretifyService } from './alretify.service';

describe('Service: Alretify', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlretifyService]
    });
  });

  it('should ...', inject([AlretifyService], (service: AlretifyService) => {
    expect(service).toBeTruthy();
  }));
});
