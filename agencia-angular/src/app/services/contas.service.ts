import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IConta } from '../interfaces/conta';
import { ISaqueDeposito } from '../interfaces/saque-deposito';
import { ITransferir } from '../interfaces/transferir';

@Injectable({
  providedIn: 'root'
})
export class ContasService {
  api = environment.api;
  endpoint = 'contas';


  constructor(private http: HttpClient) { }

  listartodascontas(){
    return this.http.get(`${this.api}/${this.endpoint}/`)
  }
  cadastrarConta(conta: IConta) {
    return this.http.post(`${this.api}/${this.endpoint}/`, conta );

  }
  remover(id: number){
    return this.http.delete(`${this.api}/${this.endpoint}/${id}`);

  }
  saque(saqueDeposito: ISaqueDeposito) {
    return this.http.put<ISaqueDeposito>(`${this.api}/${this.endpoint}/saque`, saqueDeposito);
  }
  deposito(deposito: ISaqueDeposito) {
    return this.http.put<ISaqueDeposito>(`${this.api}/${this.endpoint}/deposito`, deposito);
  }
  buscarContaPorId(id: number){
    return this.http.get(`${this.api}/${this.endpoint}/${id}`);
  }
  transferencia(transferencia: ITransferir) {
    return this.http.put(`${this.api}/${this.endpoint}/transferencia`, transferencia);

  }
  removerr(id: number){
    return this.http.delete(`${this.api}/${this.endpoint}/${id}`);
}
cadastrar(conta: IConta) {
  if(conta.id){
    return this.http.put<IConta>(`${this.api}/${this.endpoint}/${conta.id}`, conta);
  }
  return this.http.post(`${this.api}/${this.endpoint}/`, conta);
}
editarconta(conta: IConta) {
  return this.http.put(`${this.api}/${this.endpoint}/`, conta);
}
ListarTodosContas() {
  return this.http.get<IConta[]>(`${this.api}/${this.endpoint}/`);
}
}
