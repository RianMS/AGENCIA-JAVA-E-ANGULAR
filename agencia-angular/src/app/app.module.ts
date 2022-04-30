import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ContasComponent } from './pages/contas/contas.component';
import{ HttpClientModule} from '@angular/common/http';
import { ClientesCadastrarEditarComponent } from './pages/clientes/clientes-cadastrar-editar/clientes-cadastrar-editar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SacarComponent } from './pages/sacar/sacar.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { TransferirComponent } from './pages/transferir/transferir.component';
import { PaginainicialComponent } from './pages/paginainicial/paginainicial.component';
import { ContasCadastrarEditarComponent } from './pages/contas/contas-editar-cadastrar-editar/contas-editar-cadastrar-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContasComponent,
    ClientesComponent,
    ClientesCadastrarEditarComponent,
    ContasCadastrarEditarComponent,
    SacarComponent,
    DepositoComponent,
    TransferirComponent,
    PaginainicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
