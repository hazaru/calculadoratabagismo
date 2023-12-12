
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { LoginComponent } from './components/login/login.component';
import { ResumohojeComponent } from './components/resumohoje/resumohoje.component';
import { ResumomesComponent } from './components/resumomes/resumomes.component';
import { ResumogeralComponent } from './components/resumogeral/resumogeral.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HistoricoCadastroComponent } from './components/historico-cadastro/historico-cadastro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'calculadora',
    component: CalculadoraComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'resumo-hoje',
    component: ResumohojeComponent
  },
  {
    path: 'resumo-mes',
    component: ResumomesComponent
  },
  {
    path: 'resumo-geral',
    component: ResumogeralComponent
  },
  {
    path: 'historico-cadastro',
    component: HistoricoCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
