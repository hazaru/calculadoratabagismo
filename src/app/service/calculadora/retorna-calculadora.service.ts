import { RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { Observable } from 'rxjs';
import { ICalculadora } from '../../calculadora/calculadora/ICalculadora';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetornaCalculadoraService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:3000/cigarrosutilizados'

  listar(): Observable<ICalculadora[]> {
    return this.http.get<ICalculadora[]>(this.API)
  }

}
