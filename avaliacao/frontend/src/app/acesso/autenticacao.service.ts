import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import { Usuario } from '../usuarios/usuario';
import { TokenService } from './token.service';

const API_URL = 'http://localhost:3000/login';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private logadoSubject = new BehaviorSubject<Usuario>(null);

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { 
    if (this.tokenService.hasToken()) {
      this.processaToken();
    }
  }

  autentica(email: string, senha: string) {
    return this.http
      .post(
        API_URL,
        { email, senha },
        { observe: 'response' }
      )
      .pipe(tap(resp => {
        let authToken = resp.headers.get('x-access-token');
        this.tokenService.setToken(authToken);
        this.processaToken();
      }));
  }

  sair() {
    this.tokenService.removeToken();
    this.logadoSubject.next(null);
  }

  getUsuarioLogadoObservable() {
    return this.logadoSubject.asObservable();
  }

  temUsuarioLogado() {
    return this.tokenService.hasToken();
  }

  private processaToken() {
    let token = this.tokenService.getToken();
    let usuario = jwt_decode(token) as Usuario;
    this.logadoSubject.next(usuario);
  }
}