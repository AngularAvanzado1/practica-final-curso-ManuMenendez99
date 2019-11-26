import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Greetings } from "@a-boss/domain";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class GreetingsService {
private apiUrl = 'http://localhost:3333/api';
  constructor(private httpClient: HttpClient) {  }
  public getGreetings$(): Observable<Greetings> {
    return this.httpClient.get<Greetings>(this.apiUrl)
  }
}
