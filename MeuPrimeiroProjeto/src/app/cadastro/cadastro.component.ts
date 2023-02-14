import { Component } from '@angular/core';
import { ICurso } from '../classes/interface.curso';

@Component({
    moduleId: module.id,
    templateUrl: 'views/cadastro.component.html'

    // template: `
    //     <div class="container margem">
    //         <h1>CADASTRO DE CURSOS</h1>
    //         <h3>Código:{{curso.codigo}}</h3>
    //         <h3>Descrição:{{curso.descricao}}</h3>
    //         <h3>Carga Horária:{{curso.ch}}</h3>
    //     </div>
    // `
})

export class CadastroComponent {
    // Simulação: definindo apenas um objeto

// public curso : ICurso = {
//     codigo: 10,
//     descricao: 'Node JS',
//     ch: 24
// };

//      ARRAY
public listaCadastro : ICurso[] = [
    {codigo: 16, descricao:'Algoritmos', ch:15},
    {codigo: 14, descricao:'Lógica de Programação', ch:15},
    {codigo: 15, descricao:'Desenvolvimento Angular 4', ch:15}
]


}