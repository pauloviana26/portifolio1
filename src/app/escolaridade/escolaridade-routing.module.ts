import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolaridadePage } from './escolaridade.page';

const routes: Routes = [
  {
    path: '',
    component: EscolaridadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolaridadePageRoutingModule {}
