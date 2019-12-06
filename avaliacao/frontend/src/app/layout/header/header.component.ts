import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Usuario } from 'src/app/usuarios/usuario';
import { AutenticacaoService } from 'src/app/acesso/autenticacao.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  private logado$: Observable<Usuario>;
  
  constructor(
    private router: Router,
    private autenticacaoService: AutenticacaoService
  ) {
    this.logado$ = this.autenticacaoService.getUsuarioLogadoObservable();
   }

  logout() {
    this.autenticacaoService.sair();
    this.router.navigate(['']);
  }

}
