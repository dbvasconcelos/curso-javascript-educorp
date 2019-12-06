import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { ValidationMessageModule } from '../shared/components/validation-message/validation-message.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    UsuarioListaComponent, 
    UsuarioFormComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ValidationMessageModule,
  ],
  exports: [
  ]
})
export class UsuariosModule { }
