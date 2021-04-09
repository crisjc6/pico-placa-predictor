import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormularioPlacaComponent} from './components/formulario-placa/formulario-placa.component';

const routes: Routes = [
  {
    path: '', component: FormularioPlacaComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
