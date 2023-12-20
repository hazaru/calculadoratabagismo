import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { ResumohojeComponent } from './components/resumohoje/resumohoje.component';
import { ResumomesComponent } from './components/resumomes/resumomes.component';
import { ResumogeralComponent } from './components/resumogeral/resumogeral.component';
import { Router } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoricoCadastroComponent } from './components/historico-cadastro/historico-cadastro.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CadastroComponent,
    LoginComponent,
    ResumohojeComponent,
    ResumomesComponent,
    ResumogeralComponent,
    InicioComponent,
    HistoricoCadastroComponent
  ],
  imports: [
    MatStepperModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatIconModule,
    MatStepperModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
