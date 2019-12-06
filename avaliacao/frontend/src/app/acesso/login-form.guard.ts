import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AutenticacaoService } from './autenticacao.service';

@Injectable({ providedIn: 'root' })
export class LoginFormGuard implements CanActivate {

    constructor(
        private autenticacaoService: AutenticacaoService,
        private router: Router
    ) { }
    
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    )
    : boolean 
    | UrlTree 
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
        if (this.autenticacaoService.temUsuarioLogado()) {
            this.router.navigate(['inicio']);
            return false;
        }
        return true;
    }
}