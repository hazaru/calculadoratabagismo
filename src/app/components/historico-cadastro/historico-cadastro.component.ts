import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatStepper } from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { HistoricoCadastroModule } from './../../historico-cadastro/historico-cadastro.module';

@Component({
  selector: 'app-historico-cadastro',
  templateUrl: './historico-cadastro.component.html',
  styleUrls: ['./historico-cadastro.component.css'],

})
export class HistoricoCadastroComponent implements OnInit, AfterViewInit {
  isLinear = false;
  formGroup: FormGroup;
  formArray: FormGroup;
  registrationForm: FormGroup;
  historicoCadastroModule: HistoricoCadastroModule
  formControl: FormControl

  title: String = 'Calculadora de tempo perdido devido ao tabagismo';
  fumadosNoMes: number = 30;
  fumadosHoje: number = 10;
  tempoDeVidaMedioPerdido = this.fumadosNoMes * 11;

  totalGastoComCigarros = 13.3;

  zeroSeNenhumCigarroFumado(): String{


      return "Tempo médio perdido: " + this.fumadosHoje

  }

  adicionaUmCigarroHoje() {
    this.fumadosHoje += 1;
  }

  tempoDeVidaMedioPerdidoMes() {
    this.fumadosNoMes * 11;
  }

  animalControl : [{
    animal: "String",
    b: "String",
    c: "String"
  }]


  @ViewChild(MatStepper) matStepper: MatStepper;




  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.formArray = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    console.log(this.matStepper._stepHeader.toArray()[0]._elementRef.nativeElement.childNodes[2].TEXT_NODE);
    console.log(this.matStepper._stepHeader.toArray()[1]._elementRef.nativeElement.childNodes[2].TEXT_NODE);
    console.log(this.matStepper._stepHeader.toArray()[2]._elementRef.nativeElement.childNodes[2].TEXT_NODE);

    console.log(this.matStepper._stepHeader.toArray()[0]._elementRef.nativeElement.querySelector('.mat-step-label').textContent);
    console.log(this.matStepper._stepHeader.toArray()[1]._elementRef.nativeElement.querySelector('.mat-step-label').textContent);
    console.log(this.matStepper._stepHeader.toArray()[2]._elementRef.nativeElement.querySelector('.mat-step-label').textContent);
  }
}

