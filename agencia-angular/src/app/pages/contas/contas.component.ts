import { Component, OnInit } from '@angular/core';

import { subscribeOn, Subscriber } from 'rxjs';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {

  constructor(private contaservice : ContasService) { }
  contas : any[] = [];

  ngOnInit(): void {
    this.ListarTodasContas();
  }

  ListarTodasContas(){
    this.contaservice.listartodascontas().subscribe((result: any)  => {
      this.contas = result;
      console.log(this.contas);
    });
  }
  confirmar(id: number) {
    Swal.fire({
      title: 'Você está certo disso?',
      text: "Tem certeza que deseja remover este conta?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Deletar Conta',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.contaservice.removerr(id).subscribe(() => {
          Swal.fire({
            title: 'Conta deletada',
            text: "Conta removido com sucesso!",
            icon: 'success',
          });
          this.ListarTodasContas();
        }, error => {
          console.error(error)
        });
      }
    })
  }

  }
