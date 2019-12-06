import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioNaoCadastradoValidatorService } from './usuario-nao-cadastrado.validator.service';

const API_URL = 'http://localhost:3000/usuarios';

@Injectable({ providedIn: 'root' })
export class UsuarioService {

    constructor(
        private http: HttpClient
    ) { }

    listaUsuarios() {
        return this.http.get<Usuario[]>(API_URL);
    }

    insereUsuario(usuario: Usuario) {
        return this.http.post(API_URL, usuario);
    }

    removeUsuario(usuario: Usuario) {
        return this.http.delete(API_URL + '/' + usuario.id);
    }

    verificaEmailCadastrado(email: string) {
        return this.http.get(API_URL + '/existe/' + email);
    }
}