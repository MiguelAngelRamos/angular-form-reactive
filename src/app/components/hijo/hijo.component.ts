import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  title: string;
  valorDos: any;

  @Input() propiedadUno!: string;
  @Input() propiedadDos!: object;

  @Output() desdeElHijo = new EventEmitter();

  constructor() {
    this.title = 'Componente Hijo'
  }

  ngOnInit() {
    console.log(this.propiedadUno);
    console.log(this.propiedadDos);
  }

}
