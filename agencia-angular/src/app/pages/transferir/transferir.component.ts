import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ITransferir } from 'src/app/interfaces/transferir';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent implements OnInit {
  formTransferir: FormGroup = new FormGroup({
    agenciaDestino: new FormControl('', Validators.required),
    agenciaOrigem: new FormControl('', Validators.required),
    numeroContaDestino: new FormControl('', Validators.required),
    numeroContaOrigem: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
  });

  constructor(
    private contasService : ContasService,
    private router: Router,
    private route: ActivatedRoute
) { }

  ngOnInit(): void {

  }
  transferencia(){
    const transferencia: ITransferir = this.formTransferir.value;
    this.contasService.transferencia(transferencia).subscribe((result =>{
      Swal.fire('Sucesso', 'Saque Concluido', 'success')
      this.router.navigate(['/contas']);
    }), error =>{
      Swal.fire('erro no saque', 'aconteceu alguma coisa no seu saque','success');
    });

  }

}
