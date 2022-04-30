import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from 'src/app/interfaces/cliente';
import { IConta } from 'src/app/interfaces/conta';
import { ClientesService } from 'src/app/services/clientes.service';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contas-editar-cadastrar-editar',
  templateUrl: './contas-editar-cadastrar-editar.component.html',
  styleUrls: ['./contas-editar-cadastrar-editar.component.css']
})
export class ContasCadastrarEditarComponent implements OnInit {

  emptyConta: IConta = {
    id: 0,
    agencia: '',
    numero: '',
    saldo: 0,
  }

  formConta: FormGroup = this.preencheFormGroup(this.emptyConta);
  clientes: ICliente[] = [];
  clientePorCPF: any = null;
  contas: IConta[] = [];
  idCli: any;

  constructor(
    private router : Router,
    private clienteService: ClientesService,
    private contaService: ContasService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if(this.router.url === "/contas/"+id+"/editar"){
      if(id){
        this.contaService.buscarContaPorId(id).subscribe((result: any)=>{
          this.formConta = this.preencheFormGroup(result);
          this.idCli = result.cliente.id
          console.log(this.idCli)
        })
      }
    }

    const cpf = this.activatedRoute.snapshot.paramMap.get('cpf');
    if (!cpf) {
      return this.buscaClientes();
    }
    this.buscaPorCpf(cpf);
  }

  buscaClientes() {
    this.clienteService.ListarTodosClientes().subscribe(result => {
      this.clientes = result;
    });
  }


  buscaPorCpf(cpf: string) {
    this.clienteService.buscarPorCPF(cpf).subscribe(result => {
      this.clientePorCPF = result;
      this.formConta.get('idCliente')?.setValue(result.id);
    });
  }
  preencheFormGroup(conta: IConta): FormGroup {
    const cliente = {
      id: this.idCli
    }

    return new FormGroup({
      id: new FormControl(conta.id ? conta.id : null),
      agencia: new FormControl(conta.agencia ? conta.agencia : '', Validators.required),
      numero: new FormControl(conta.numero ? conta.numero : '', Validators.required),
      saldo: new FormControl(conta.saldo ? conta.saldo : 0, Validators.required),
      cliente: new FormControl(cliente || null, Validators.required)
    });
  }
  preencheFormGroupConta(idCliente : IConta): FormGroup {
    return new FormGroup({
      id: new FormControl(idCliente.id ? idCliente.id : null),
      agencia: new FormControl(idCliente.agencia ? idCliente.agencia : '', Validators.required),
      numero: new FormControl(idCliente.numero ? idCliente.numero : '', Validators.required),
      saldo: new FormControl(idCliente.saldo ? idCliente.saldo : 0, Validators.required),
      idCliente: new FormControl(null, Validators.required)
    });
  }



  enviar() {

    const conta: IConta = {
      id:this.formConta.get('id')?.value,
      agencia: this.formConta.get('agencia')?.value,
      numero: this.formConta.get('numero')?.value,
      saldo: this.formConta.get('saldo')?.value,
      cliente: { id: this.formConta.get('cliente')?.value } as ICliente

    }

    this.contaService.cadastrar(conta).subscribe(result => {
      Swal.fire(
        'Sucesso',
        `Ação feita com Sucesso sucesso!`,
        'success');
    })
  }
  enviarr():void{

    const conta: IConta = this.formConta.value;
    this.contaService.cadastrar(conta).subscribe(result => {console.log});
    Swal.fire('Sucesso', 'editado com sucesso!', 'success');
      this.router.navigate(['/contas']);

}
}
