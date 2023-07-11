//onde implementa a requisiçao para o backend

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePageable } from '../model/responsePageable.model';
import { Observable } from 'rxjs';
import { Live } from '../model/live.model';

@Injectable({
  providedIn: 'root'
}) 
export class LiveService {

  apiUrl = 'http://localhost:4200/lives';

  //ESTUDAR mais as 3 linhas abaixo
  //configura o cabeçalho da requisição HTTP para indicar que o conteúdo sendo enviado é JSON
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  //faz uma solicitação HTTP GET para um URL específico, passando um parâmetro de consulta chamado flag.
  //ele retorna um objeto Observable<ResponsePageable>
  public getLivesWithFlag(flag: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
  }

  public postLives(live: any) : Observable<Live>{
    return this.httpClient.post<any>(this.apiUrl, live, this.httpOptions);
  }

}
