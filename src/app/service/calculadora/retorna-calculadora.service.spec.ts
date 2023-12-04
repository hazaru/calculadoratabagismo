import { TestBed } from '@angular/core/testing';

import { RetornaCalculadoraService } from './retorna-calculadora.service';

describe('RetornaCalculadoraService', () => {
  let service: RetornaCalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetornaCalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
