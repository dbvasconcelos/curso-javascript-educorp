import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from '../usuario.service';
import { UsuarioNaoCadastradoValidatorService } from '../usuario-nao-cadastrado.validator.service';
import { Usuario } from '../usuario';

@Component({
  templateUrl: './usuario-form.component.html'
})
export class UsuarioFormComponent implements OnInit {

  usuarioForm: FormGroup
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
    private usuarioNaoCadastradoValidatorService: UsuarioNaoCadastradoValidatorService
  ) { }

  ngOnInit() {
    this.usuarioForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required, 
          Validators.email
        ],
        this.usuarioNaoCadastradoValidatorService.verificaUsuarioCadastrado()
      ],
      nome: ['', Validators.required],
      senha: ['', Validators.required],
      administrador: ['']
    });
  }

  insereUsuario() {
    const novoUsuario = this.usuarioForm.getRawValue() as Usuario;
    this.usuarioService.insereUsuario(novoUsuario)
      .subscribe(
        () => this.router.navigate(['/usuarios']),
        err => console.log(err)
      );

  }
}
