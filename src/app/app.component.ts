import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'formularios-angular';

  datoExterno = 'Eres un Developer de Angular';

  identity = {
    id: 1,
    web: 'github.com',
    tematica: 'Frontend developer'
  }

}
