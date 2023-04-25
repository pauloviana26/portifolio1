import { TestBed } from '@angular/core/testing';

import { DadosloginService } from './dadoslogin.service';

describe('DadosloginService', () => {
  let service: DadosloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
