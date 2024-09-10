import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComplexFormComponent } from './complex-form/complex-form.component';
import { HijoComponent } from './components/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComplexFormComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
