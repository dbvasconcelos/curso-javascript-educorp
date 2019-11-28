import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const APIBackEnd = 'http://localhost:3000/';
const rotaLOGIN  = 'http://localhost:3000/base/acesso';

// colocar o service GLOBAl para o componente usar
@Injectable({providedIn: 'root'})


export class AcessoService{

  dados : object[] = [];

  constructor(private http: HttpClient) {  }

  listaDeDados() {
    return this.http.get<object[]>(APIBackEnd);
  }

  autenticacaoAcesso(login: string, senha:string)
  {
      console.log("LOGIN da AUTENTICACAO = " + login);
      console.log("SENHA da AUTENTICACAO = " + senha);

      let envio = this.http.post(rotaLOGIN,{login,senha});
      console.log(envio);
      return envio;
  }
}