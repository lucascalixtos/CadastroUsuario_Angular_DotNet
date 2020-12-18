import { Routes, RouterModule } from '@angular/router';
import {CriaUsuarioComponent} from './cria-usuario/cria-usuario.component'
import {ListaUsuarioComponent} from './lista-usuario/lista-usuario.component'

export const routes: Routes = [
  {path: '', component: CriaUsuarioComponent},
  {path: 'lista-usuario', component: ListaUsuarioComponent}
];
