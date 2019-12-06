import { Component, OnInit } from '@angular/core';

import { ReservaService } from '../reserva.service';
import { Reserva } from '../reserva';

@Component({
  templateUrl: './reserva-lista.component.html'
})
export class ReservaListaComponent implements OnInit {

  filtro: string = '';
  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService) { }

  ngOnInit() {
    this.reservaService.listaReservas().subscribe(reservas => this.reservas = reservas);
  }

}
