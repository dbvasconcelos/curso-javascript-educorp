import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AutenticacaoService } from './autenticacao.service';
import { Usuario } from '../usuarios/usuario';

@Injectable({ providedIn: 'root' })
export class AutorizadoGuard implements CanActivate {

    private logado: Usuario;

    constructor(
        private autenticacaoService: AutenticacaoService,
        private router: Router
    ) {
        this.autenticacaoService.getUsuarioLogadoObservable().subscribe(logado => this.logado = logado);
     }
    
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    )
    : boolean 
    | UrlTree 
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
        if (!this.logado.administrador) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}