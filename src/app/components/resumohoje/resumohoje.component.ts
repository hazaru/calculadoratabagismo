import { CadastroService } from './../../service/cadastro/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { ICalculadora } from 'src/app/calculadora/calculadora/ICalculadora';
import { Status } from 'src/app/enums/Status';

@Component({
  selector: 'app-resumohoje',
  templateUrl: './resumohoje.component.html',
  styleUrls: ['./resumohoje.component.css'],
})
export class ResumohojeComponent implements OnInit {
  title: String = 'Calculadora de tempo perdido devido ao tabagismo';
  fumadosNoMes: number = 30;
  fumadosHoje: number = 10;
  tempoDeVidaMedioPerdido = this.fumadosNoMes * 11;

  constructor(private calcService: CadastroService) {}

  iCalc: ICalculadora[];

  totalGastoComCigarros = 13.3;

  zeroSeNenhumCigarroFumado(): String {
    return 'Tempo médio perdido: ' + this.fumadosHoje;
  }

  adicionaUmCigarroHoje() {
    this.fumadosHoje += 1;
  }

  tempoDeVidaMedioPerdidoMes() {
    this.fumadosNoMes * 11;
  }

  ngOnInit(): void {
    // this.iCalc = [{
    //   "id": 1,
    //   "descricao":"rafael",
    //   "valor": 1,
    //   "status": Status.NAO_PAGO
    // },
    // {
    //   "id": 2,
    //   "descricao":"rafael",
    //   "valor": 1,
    //   "status": Status.PAGO
    // }]

    this.getAllUsers();
  }

  getAllUsers() {
    this.calcService.getClientList().subscribe((data) => {
      this.iCalc = data;
    });
  }
}
