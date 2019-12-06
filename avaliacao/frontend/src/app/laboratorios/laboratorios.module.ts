import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaboratorioListaComponent } from './laboratorio-lista/laboratorio-lista.component';
import { AppRoutingModule } from '../app-routing.module';
import { LaboratorioFormComponent } from './laboratorio-form/laboratorio-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationMessageModule } from '../shared/components/validation-message/validation-message.module';

@NgModule({
  declarations: [
    LaboratorioListaComponent,
    LaboratorioFormComponent
  ],
  imports: [ 
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ValidationMessageModule
  ]
})
export class LaboratoriosModule { }
