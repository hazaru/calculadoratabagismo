import { ICalculadora } from './../../calculadora/calculadora/ICalculadora';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  private readonly API = "http://localhost:8083/calculadora/users"

  getClientList(): Observable<ICalculadora[]>{

    return this.http.get<ICalculadora[]>(`${this.API}`)
  }




}
