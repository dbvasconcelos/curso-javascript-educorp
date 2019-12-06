import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { AutenticacaoService } from 'src/app/acesso/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './usuario-lista.component.html'
})
export class UsuarioListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  logado: Usuario;

  constructor(
    private router: Router,
    private usuarioService:UsuarioService,
    private autenticacaoService: AutenticacaoService
  ) { }
  
  ngOnInit() {
    this.autenticacaoService.getUsuarioLogadoObservable().subscribe(logado => this.logado = logado);
    this.usuarioService.listaUsuarios().subscribe(usuarios => this.usuarios = usuarios);
  }

  diferenteDoLogado(usuario: Usuario) {
    return this.logado.email != usuario.email;
  }

  removeUsuario(usuario: Usuario) {
    this.usuarioService.removeUsuario(usuario)
      .subscribe(
        () => this.usuarios.splice(this.usuarios.indexOf(usuario), 1),
        err => console.log(err)
      );
  }
  
}
