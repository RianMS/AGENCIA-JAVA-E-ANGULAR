import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesCadastrarEditarComponent } from './pages/clientes/clientes-cadastrar-editar/clientes-cadastrar-editar.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ContasCadastrarEditarComponent } from './pages/contas/contas-editar-cadastrar-editar/contas-editar-cadastrar-editar.component';

import { ContasComponent } from './pages/contas/contas.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { PaginainicialComponent } from './pages/paginainicial/paginainicial.component';
import { SacarComponent } from './pages/sacar/sacar.component';
import { TransferirComponent } from './pages/transferir/transferir.component';


const routes: Routes = [
  {path: 'clientes', component: ClientesComponent},
  {path: 'contas' , component : ContasComponent,
    //  children:[
    //   {path: 'saque' , component : SacarComponent},
    //   {path: 'deposito' , component : DepositoComponent},
    //   {path: 'transferir' , component : TransferirComponent},
    //   {path: 'cadastrar' , component : ContasEditarCadastrarEditarComponent},
    // ]
  },
  {path: 'clientes/cadastrar' , component : ClientesCadastrarEditarComponent},
  {path: 'contas/cadastrar' , component : ContasCadastrarEditarComponent},
  {path: 'contas/:id/cadastrar' , component : ContasCadastrarEditarComponent},
  {path: 'contas/:id/editar' , component : ContasCadastrarEditarComponent},
  {path: 'clientes/editar/:id' , component : ClientesCadastrarEditarComponent},
  {path: 'contas/saque' , component : SacarComponent},
  {path: 'contas/deposito' , component : DepositoComponent},
  {path: 'contas/transferir' , component : TransferirComponent},
  {path: '' , component : PaginainicialComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
