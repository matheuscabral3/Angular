import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { appRoutes } from './rotas/app.routes'; // Deve vir primeiro
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';    

//USANDO AS ROTAS
import { LogoComponent } from './logo/logo.component';
import { ListaComponent } from './lista/lista.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { notFoundComponent } from './erro/notFound.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LogoComponent,
    ListaComponent,
    CadastroComponent,
    notFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
