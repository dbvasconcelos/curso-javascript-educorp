import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ObjectUnsubscribedError } from 'rxjs/internal/util/ObjectUnsubscribedError';
import { AcessoService } from '../acesso/acesso.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  result: any;
  caminhoJson = '/assets/produtos.json';

  constructor(private http:HttpClient) { }

  ngOnInit() {
     this.http.get<any>(this.caminhoJson).subscribe(response =>
      {
        this.result = response;
      });
  }

}
