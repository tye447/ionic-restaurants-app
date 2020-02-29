import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderInfoPageRoutingModule } from './order-info-routing.module';

import { OrderInfoPage } from './order-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderInfoPageRoutingModule
  ],
  declarations: [OrderInfoPage]
})
export class OrderInfoPageModule {}
