import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';


@Component({
  selector: 'app-historico-cadastro',
  templateUrl: './historico-cadastro.component.html',
  styleUrls: ['./historico-cadastro.component.css']
})
export class HistoricoCadastroComponent implements OnInit, AfterViewInit {
  isLinear = false;
  formGroup: FormGroup;
  formArray: FormGroup;
  title = "Blast"
  registrationForm: FormGroup;

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
