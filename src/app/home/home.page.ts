import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome: string;
  telefone: string;
  email: string;

  constructor(public router: Router) {}

  abrirTela(){
    const dados= {nome:this.nome, email:this.email,telefone:this.telefone};
    this.router.navigateByUrl(`/tela-confirmar/${this.nome}/${this.email}/${this.telefone}`);
  }


}
