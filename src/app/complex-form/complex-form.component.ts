import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrl: './complex-form.component.css'
})
export class ComplexFormComponent implements OnInit {

  complexForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.complexForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      bio: ['', Validators.maxLength(500)],
      gender: ['', Validators.required],
      skills: this.formBuilder.array([
        this.formBuilder.control(false),
        this.formBuilder.control(false),
        this.formBuilder.control(false),
      ]),
      country: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      birthdate: ['', Validators.required],
      satisfaction: 50
    });
  }

  get skills() {
    return this.complexForm.get('skills') as FormArray;
  }
  skillName(index: number): string {
    //*const frutas = ['manzana', 'pera', 'naranja']
   //* frutas[0] obtengo 'manzana'
   //* frutas[1] obtengo 'pera'
   //* frutas[2] obtengo 'naranja'
    const skillNames = ['Programación', 'Diseño', 'Marketing'];
    return skillNames[index];
  }

  onSubmit() {
    if(this.complexForm.valid) {
      const formValue = this.complexForm.value;
      // Mapeo de habilidades seleccionadas
     //*   formValue.skills -> [true,false,false] 
      const selectedSkills = formValue.skills.map((element:boolean, index:number) => element ? this.skillName(index): null)
      .filter((skill: string | null) => skill !== null);
      console.log(formValue);
      console.log(selectedSkills); // Array(3) [ "Programación", null, null ]
      // llamar servicio que se comunique con backend y enviar informacion

      delete formValue.skills;
      console.log('formulario a enviar al backend: ', {
        ...formValue,
        selectedSkills
      });
    } else {
      console.log('formulario no valido');
    }
  }  
}
