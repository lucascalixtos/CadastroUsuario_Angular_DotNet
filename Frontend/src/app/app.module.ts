import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routes} from './app-routing.module'
import { AppComponent } from './app.component';
import { CriaUsuarioComponent } from './cria-usuario/cria-usuario.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CriaUsuarioComponent,
    ListaUsuarioComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
