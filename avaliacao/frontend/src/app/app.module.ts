import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrosModule } from './erros/erros.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AcessoModule } from './acesso/acesso.module';
import { LayoutModule } from './layout/layout.module';
import { InicioComponent } from './inicio/inicio.component';
import { LaboratoriosModule } from './laboratorios/laboratorios.module';
import { ReservasModule } from './reservas/reservas.module';
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrosModule,
    UsuariosModule,
    AcessoModule,
    LayoutModule,
    LaboratoriosModule,
    ReservasModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
