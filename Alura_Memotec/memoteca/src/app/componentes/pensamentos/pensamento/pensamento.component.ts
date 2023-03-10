import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})

export class PensamentoComponent  implements OnInit {

  @Input() pensamento = {
    conteudo: 'Editando em Angular',
    autoria: 'Matheus M.',
    modelo: 'modelo3'
  }

  constructor() {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
