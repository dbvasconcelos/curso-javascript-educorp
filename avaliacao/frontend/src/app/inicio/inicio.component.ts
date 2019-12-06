import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../reservas/reserva.service';
import { Reserva } from '../reservas/reserva';
import { AutenticacaoService } from '../acesso/autenticacao.service';
import { Usuario } from '../usuarios/usuario';
import { DataService } from '../datas/data.service';

@Component({
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  logado: Usuario;
  reservas: Reserva[];
  
  constructor(
    private autenticacaoService: AutenticacaoService,
    private reservaService: ReservaService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.autenticacaoService.getUsuarioLogadoObservable()
      .subscribe(logado => this.logado = logado);
    this.reservaService.listaReservasPorUsuario(this.logado)
      .subscribe(reservas => this.reservas = reservas);
  }

  cancelaReserva(reserva: Reserva) {
    this.reservaService.removeReserva(reserva)
      .subscribe(
        () => this.reservas.splice(this.reservas.indexOf(reserva), 1),
        err => console.log(err)
      );
  }
}
