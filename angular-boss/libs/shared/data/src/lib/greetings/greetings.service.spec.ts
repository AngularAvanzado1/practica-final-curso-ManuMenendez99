import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { async, TestBed } from "@angular/core/testing";
import { Observable } from "rxjs";
import { GreetingsService } from "./greetings.service";

describe('GIVEN: a GreetingsService', () => {
  describe('WHEN: the DataModule is compiled', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
    });

    it('THEN: should be created', () => {
      const service: GreetingsService = TestBed.get(GreetingsService);
      expect(service).toBeTruthy();
    });

    it(`THEN: should return an observable when call 'getGrettings()'`, () => {
      const service: GreetingsService = TestBed.get(GreetingsService);
      const greetings$: Observable<any> = service.getGreetings$();
      expect(greetings$).toBeInstanceOf(Observable);
    });

    //Ojo al async para ejecutar las llamadas asíncronas
    it(`THEN: should return 'Welcome to api! when call 'getGreetings()'`, async(() => {
      const service: GreetingsService = TestBed.get(GreetingsService);
      service.getGreetings$().subscribe(result => expect(result).toEqual({
        message: 'Welcome to api!'
      }));
      const httpMock = TestBed.get(HttpTestingController); // mock del backend para no depender del servidor
      const req = httpMock.expectOne('http://localhost:3333/api'); // esperar a que se llame a esta ruta
      req.flush({ message: 'Welcome to api!' }); // responder con esto
      httpMock.verify();
    }));
  });
});
