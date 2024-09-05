import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup; // su formulario

  constructor( private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(8)]]
      
    });
  }


  get emailIsInvalid():boolean {
    return this.loginForm.get('email')!.invalid && this.loginForm.get('email')!.touched;
  }

  get passwordIsInvalid():boolean {
    return this.loginForm.get('password')!.invalid && this.loginForm.get('password')!.touched;
  }

  onSubmit() {
    if(this.loginForm.valid) {
      console.log('Formulario enviado', this.loginForm.value);
    } else {
      console.log('Formulario no válido');
    }

    
  }

}
