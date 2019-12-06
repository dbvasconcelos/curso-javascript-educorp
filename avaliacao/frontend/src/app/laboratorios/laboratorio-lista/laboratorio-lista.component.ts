import { Component, OnInit } from '@angular/core';

import { LaboratorioService } from '../laboratorio.service';
import { Laboratorio } from '../laboratorio';

@Component({
  templateUrl: './laboratorio-lista.component.html'
})
export class LaboratorioListaComponent implements OnInit {

  laboratorios: Laboratorio[] = [];

  constructor(private laboratorioService:LaboratorioService) { }

  ngOnInit() {
    this.laboratorioService.listaLaboratorios().subscribe(laboratorios => this.laboratorios = laboratorios);
  }

  removeLaboratorio(laboratorio: Laboratorio) {
    this.laboratorioService.removeLaboratorio(laboratorio)
      .subscribe(
        () => this.laboratorios.splice(this.laboratorios.indexOf(laboratorio), 1),
        err => console.log(err)
      );
  }
}
