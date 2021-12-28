import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterPfeComponent } from './ajouter-pfe/ajouter-pfe.component';
import { ListPfesComponent } from './list-pfes/list-pfes.component';

const routes: Routes = [
  {path:"List",component:ListPfesComponent},
  {path:"",component:ListPfesComponent},

  {path:"Ajouter",component:AjouterPfeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
