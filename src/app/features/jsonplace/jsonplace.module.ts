import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonplaceRoutingModule } from './jsonplace-routing.module';
import { JsonplaceComponent } from './jsonplace.component';


@NgModule({
  declarations: [
    JsonplaceComponent
  ],
  imports: [
    CommonModule,
    JsonplaceRoutingModule
  ]
})
export class JsonplaceModule { }
