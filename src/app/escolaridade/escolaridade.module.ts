import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolaridadePageRoutingModule } from './escolaridade-routing.module';

import { EscolaridadePage } from './escolaridade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolaridadePageRoutingModule
  ],
  declarations: [EscolaridadePage]
})
export class EscolaridadePageModule {}
