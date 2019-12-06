import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ReservaFormComponent } from './reserva-form/reserva-form.component';
import { ValidationMessageModule } from '../shared/components/validation-message/validation-message.module';
import { ReservaListaComponent } from './reserva-lista/reserva-lista.component';
import { FiltraPorTextoPipe } from './filtra-por-texto.pipe';

@NgModule({
  declarations: [
    ReservaFormComponent,
    ReservaListaComponent,
    FiltraPorTextoPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ValidationMessageModule
  ]
})
export class ReservasModule { }
