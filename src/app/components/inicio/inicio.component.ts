import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

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
}
