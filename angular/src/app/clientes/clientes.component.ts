import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  result : any;
  caminhoJson = '/assets/clientes.json';

  constructor(private http: HttpClient) { }
    
  ngOnInit() {
    this.http.get<any>(this.caminhoJson).subscribe(response =>
      {
         this.result = response;
      });
  }

}
