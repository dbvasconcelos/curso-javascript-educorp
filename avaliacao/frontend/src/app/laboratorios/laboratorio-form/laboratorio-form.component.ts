import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Laboratorio } from '../laboratorio';
import { LaboratorioService } from '../laboratorio.service';

@Component({
  templateUrl: './laboratorio-form.component.html'
})
export class LaboratorioFormComponent implements OnInit {

  laboratorioForm: FormGroup;
   
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private laboratorioService: LaboratorioService
  ) { }

  ngOnInit() {
    this.laboratorioForm = this.formBuilder.group({
      nome: [
        '',
        Validators.required
      ],
    });
  }

  insereLaboratorio() {
    const novoLaboratorio = this.laboratorioForm.getRawValue() as Laboratorio;
    this.laboratorioService.insereLaboratorio(novoLaboratorio)
      .subscribe(
        () => this.router.navigate(['/laboratorios']),
        err => console.log(err)
      );

  }
}
