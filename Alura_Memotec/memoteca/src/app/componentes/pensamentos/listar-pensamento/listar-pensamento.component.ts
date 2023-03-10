import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    // {
    //   conteudo: 'Passo informações para o componente filho',
    //   autoria: 'Componente pai',
    //   modelo: 'modelo3',
    // },
    // {
    //   conteudo: 'Minha Propriedade é Decorada com @Input',
    //   autoria: 'Componente Filho',
    //   modelo: 'modelo3',
    // }
  ];

  constructor() {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
