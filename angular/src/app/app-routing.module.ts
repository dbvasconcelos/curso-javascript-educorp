import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcessoComponent } from './acesso/acesso.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  { path: '', component: AcessoComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'produtos', component: ProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
