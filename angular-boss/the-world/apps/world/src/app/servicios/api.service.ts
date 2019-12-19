import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais, Regiones } from '@t/domain';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  API_URI_REGION = 'http://api.worldbank.org/v2/region/'
  API_URI_PAIS = 'http://api.worldbank.org/V2/country/'

  getRegiones() {
    return this.http.get(`${this.API_URI_REGION}?format=json&per_page=100000`)
  }

  getRegion(sID: string) {
    return this.http.get(`${this.API_URI_REGION}/${sID}?format=json&per_page=100000`)
  }

  getPaises() {
    return this.http.get(`${this.API_URI_PAIS}/?format=json&per_page=100000`)
  }

  getPais(sID: string): Observable<Pais[]> {
    return this.http.get(`${this.API_URI_PAIS}/${sID}?format=json&per_page=100000`)
    .pipe(map((data) => {
      console.log(data[1])
      return data[1]
        }))
  }

  getPaisPorRegion(sID: string) {
    return this.http.get(`${this.API_URI_REGION}${sID}/country?per_page=1000&format=json`)
  }
}
