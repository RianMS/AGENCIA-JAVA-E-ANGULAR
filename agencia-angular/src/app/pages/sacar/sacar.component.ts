import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { IConta } from 'src/app/interfaces/conta';
import { ISaqueDeposito } from 'src/app/interfaces/saque-deposito';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sacar',
  templateUrl: './sacar.component.html',
  styleUrls: ['./sacar.component.css']
})
export class SacarComponent implements OnInit {

  formsacar: FormGroup = new FormGroup({
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

  saque(){
    const saque: ISaqueDeposito = this.formsacar.value;
    this.contasService.saque(saque).subscribe((result =>{
      Swal.fire('Sucesso', 'Saque Concluido', 'success')
      this.router.navigate(['/contas']);
    }), error =>{
      Swal.fire('erro no saque', 'aconteceu alguma coisa no seu saque','success');
    });

  }

}
