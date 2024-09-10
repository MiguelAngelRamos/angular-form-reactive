import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ComplexFormComponent } from './complex-form/complex-form.component';

//* http://localhost:4200/jsonplace
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'jsonplace', loadChildren: () => import('./features/jsonplace/jsonplace.module').then(m => m.JsonplaceModule) },
  { path: 'complex-form', component: ComplexFormComponent},
  { path: '**', redirectTo: 'complex-form', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
