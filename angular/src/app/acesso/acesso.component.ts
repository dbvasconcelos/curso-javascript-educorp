import { Component, OnInit } from '@angular/core';
import { AcessoService } from './acesso.service';
import { Observable } from 'rxjs/internal/Observable';
import {FormGroup, FormBuilder, ReactiveFormsModule, FormControl, Validators} from '@angular/forms';
import { ObjectUnsubscribedError } from 'rxjs/internal/util/ObjectUnsubscribedError';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {

  objdados: object[] = [];
  loginForm: FormGroup;

  constructor(private acessoService:AcessoService, private formBuilder:FormBuilder) {
    acessoService.listaDeDados().subscribe(dados => {
      console.log(dados);
      this.objdados = dados;
    });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usuario: [
        '', 
        Validators.required
      ],
      senha: [
        '',
        Validators.required
      ]
    });
  }

  acesso() {
    const login = this.loginForm.get('usuario').value;
    const senha = this.loginForm.get('senha').value;

    this.acessoService.autenticacaoAcesso(login, senha).subscribe(dados=>{
      if (dados == 1) {
        alert('usuario autenticado');
      } else {
        alert('sem acesso')
      }
    }, 
    err => {
      this.loginForm.reset();
    });
  }
}
