import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetenciasPageRoutingModule } from './competencias-routing.module';

import { CompetenciasPage } from './competencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetenciasPageRoutingModule
  ],
  declarations: [CompetenciasPage]
})
export class CompetenciasPageModule {}
