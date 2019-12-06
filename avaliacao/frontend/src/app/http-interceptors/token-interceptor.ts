import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

import { TokenService } from '../acesso/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token = this.tokenService.getToken();
    
    if (token) {
        const tokenReq = req.clone({
          headers: req.headers.set('x-access-token', token)
        });
    
        return next.handle(tokenReq);
    } else {
        return next.handle(req);
    }
  }
}