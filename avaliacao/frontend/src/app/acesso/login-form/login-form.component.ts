import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AutenticacaoService } from '../autenticacao.service';

@Component({
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  loginForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private renderer: Renderer2,
    private autenticacaoService: AutenticacaoService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  login() {
    const email = this.loginForm.get('email').value;
    const senha = this.loginForm.get('senha').value;
    this.autenticacaoService.autentica(email, senha)
      .subscribe(
        () => {
          this.router.navigate(['inicio'])
        },
        err => {
          this.loginForm.reset();
          this.renderer.selectRootElement('#email').focus();
        }
      )
  }
}
