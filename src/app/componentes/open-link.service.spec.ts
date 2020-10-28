import { TestBed } from '@angular/core/testing';

import { OpenLinkService } from './open-link.service';

describe('OpenLinkService', () => {
  let service: OpenLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
