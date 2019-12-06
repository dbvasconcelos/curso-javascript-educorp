import { Injectable } from "@angular/core";
import { AbstractControl } from '@angular/forms';
import { debounceTime, debounce, switchMap, map, first } from 'rxjs/operators'

import { UsuarioService } from './usuario.service';

@Injectable({ providedIn: 'root' })
export class UsuarioNaoCadastradoValidatorService {
    constructor(private usuarioService: UsuarioService) { }

    verificaUsuarioCadastrado() {
        return (control: AbstractControl) => {
            return control
                    .valueChanges
                    .pipe(debounceTime(300))
                    .pipe(switchMap(email => 
                        this.usuarioService.verificaEmailCadastrado(email)
                    ))
                    .pipe(map(jaCadastrado => jaCadastrado ? { emailCadastrado: true } : null))
                    .pipe(first());
        }
    }
}