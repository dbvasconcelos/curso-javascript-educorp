import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { LaboratorioService } from 'src/app/laboratorios/laboratorio.service';
import { Laboratorio } from 'src/app/laboratorios/laboratorio';
import { dataFuturaValidator } from 'src/app/shared/validators/data-futura.validator';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { AutenticacaoService } from 'src/app/acesso/autenticacao.service';
import { Usuario } from 'src/app/usuarios/usuario';

@Component({
  templateUrl: './reserva-form.component.html'
})
export class ReservaFormComponent implements OnInit {
  
  reservaForm: FormGroup;
  laboratorios: Laboratorio[];
  logado: Usuario;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private autenticacaoService: AutenticacaoService,
    private laboratorioService: LaboratorioService,
    private reservaService: ReservaService,
  ) { }
  
  ngOnInit() {
    this.reservaForm = this.formBuilder.group({
      laboratorio: [
        '',
        Validators.required
      ],
      data: [
        '',
        [
          Validators.required,
          dataFuturaValidator
        ]
      ],
      inicio: [
        '',
        [
          Validators.required
        ]
      ],
      fim: [
        '',
        [
          Validators.required
        ]
      ],
      razao: [
        '',
        [
          Validators.required
        ]
      ]
    });
    this.laboratorioService.listaLaboratorios()
      .subscribe(laboratorios => {
        this.laboratorios = laboratorios;
        this.reservaForm.controls.laboratorio.patchValue(this.laboratorios[0].id);
      });
    this.autenticacaoService.getUsuarioLogadoObservable().subscribe(logado => this.logado = logado);
  }
  
  insereReserva() {
    let novaReserva = this.reservaForm.getRawValue() as Reserva;
    novaReserva.laboratorio = this.laboratorios.find(v => v.id ==  this.reservaForm.controls.laboratorio.value);
    novaReserva.usuario = this.logado;
    this.reservaService.insereReserva(novaReserva)
      .subscribe(
        () => this.router.navigate(['/']),
        err => console.log(err)
      );

  }
}
