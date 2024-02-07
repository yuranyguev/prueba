import { TestBed } from '@angular/core/testing';

import { ServicioSemilleroService } from './servicio-semillero.service';

describe('ServicioSemilleroService', () => {
  let service: ServicioSemilleroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioSemilleroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
