import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioListaComponent } from './usuarios/usuario-lista/usuario-lista.component';
import { NaoEncontradoComponent } from './erros/nao-encontrado/nao-encontrado.component';
import { UsuarioFormComponent } from './usuarios/usuario-form/usuario-form.component';
import { LoginFormComponent } from './acesso/login-form/login-form.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginFormGuard } from './acesso/login-form.guard';
import { AutenticadoGuard } from './acesso/autenticado.guard';
import { LaboratorioListaComponent } from './laboratorios/laboratorio-lista/laboratorio-lista.component';
import { LaboratorioFormComponent } from './laboratorios/laboratorio-form/laboratorio-form.component';
import { AutorizadoGuard } from './acesso/autorizado.guard';
import { ReservaFormComponent } from './reservas/reserva-form/reserva-form.component';
import { ReservaListaComponent } from './reservas/reserva-lista/reserva-lista.component';

const routes: Routes = [
  { 
    path: '', 
    component: LoginFormComponent, 
    canActivate: [LoginFormGuard] 
  },
  { 
    path: 'inicio', 
    component: InicioComponent, 
    canActivate: [AutenticadoGuard] 
  },
  { 
    path: 'usuarios', 
    component: UsuarioListaComponent,
    canActivate: [AutenticadoGuard, AutorizadoGuard]
  },
  { 
    path: 'usuarios/form', 
    component: UsuarioFormComponent,
    canActivate: [AutenticadoGuard, AutorizadoGuard]
  },
  { 
    path: 'laboratorios', 
    component: LaboratorioListaComponent, 
    canActivate: [AutenticadoGuard, AutorizadoGuard] 
  },
  { 
    path: 'laboratorios/form', 
    component: LaboratorioFormComponent,
    canActivate: [AutenticadoGuard, AutorizadoGuard]
  },
  { 
    path: 'reservas', 
    component: ReservaListaComponent,
    canActivate: [AutenticadoGuard]
  },
  { 
    path: 'reservas/form', 
    component: ReservaFormComponent,
    canActivate: [AutenticadoGuard]
  },
  { 
    path: '**', 
    component: NaoEncontradoComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
