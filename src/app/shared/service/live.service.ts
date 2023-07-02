//onde implementa a requisiçao para o backend

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePageable } from '../model/responsePageable.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class LiveService {

  apiUrl = 'http://localhost:8080/lives';

  //ESTUDAR mais as 3 linhas abaixo
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLivesWithFlag(flag: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
  }
}
