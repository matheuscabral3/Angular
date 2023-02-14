import { Component } from '@angular/core';
import { ICurso } from '../classes/interface.curso';

@Component({
    moduleId: module.id,
    templateUrl: 'views/lista.component.html'


    // template: `
    //     <div class="container margem">
    //         <h1>LISTA CURSOS</h1>
    //     </div>
    // `
})

export class ListaComponent {
    // Definindo um array de cursos
    public listaCursos : ICurso[] = [
        {codigo: 11, descricao: 'Desenvolvimento JAVA', ch: 30},
        {codigo: 12, descricao: 'Desenvolvimento C#', ch: 28},
        {codigo: 13, descricao: 'Desenvolvimento Front-End', ch: 34}
    ]

}