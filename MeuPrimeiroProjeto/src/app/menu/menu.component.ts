import { Component } from '@angular/core';

// moduleID <- Permite Acessar Arquivos relativos a Pasta que está.
// Ou seja, Disponibilidade de usar o conteúdo da Pasta Views.
@Component({
    moduleId: module.id,
    selector: 'menu',
    templateUrl: 'views/menu.component.html'
})
//  EXPORTAR O MenuComponent para outro Módulo.
export class MenuComponent { }