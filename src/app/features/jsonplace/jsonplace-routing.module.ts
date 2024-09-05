import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonplaceComponent } from './jsonplace.component';

//* http://localhost:4200/jsonplace
const routes: Routes = [{ path: '', component: JsonplaceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsonplaceRoutingModule { }
