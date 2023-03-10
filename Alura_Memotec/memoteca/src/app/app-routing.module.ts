import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';


const routes: Routes = [

  //  ARRAY DE ROTAS DISPONIVEIS
{
  path: '',
  redirectTo: 'listarPensamento',
  pathMatch: 'full'
},
{
  path: 'criarPensamento',
  component: CriarPensamentoComponent
},
{
  path: 'listarPensamento',
  component: ListarPensamentoComponent
},
{
  path: 'home',
  component: HomeComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
