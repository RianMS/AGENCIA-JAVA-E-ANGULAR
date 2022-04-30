import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISaqueDeposito } from 'src/app/interfaces/saque-deposito';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  formdeposito: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
  });

  constructor(
    private contasService : ContasService,
    private router: Router,
    private route: ActivatedRoute
) { }

  ngOnInit(): void {


  }
  deposito(){
    const depositos: ISaqueDeposito = this.formdeposito.value;
    this.contasService.deposito(depositos).subscribe((result =>{
      Swal.fire('Sucesso', 'Saque Concluido', 'success')
      this.router.navigate(['/contas']);
    }), error =>{
      Swal.fire('erro no saque', 'aconteceu alguma coisa no seu saque','success');
    });

  }

}
