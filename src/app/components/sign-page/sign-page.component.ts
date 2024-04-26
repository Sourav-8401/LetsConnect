import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-sign-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-page.component.html',
  styleUrl: './sign-page.component.css'
})
export class SignPageComponent {
  constructor(private router: Router){}
  imagePath: string = './logo.png'; 
  email = new FormControl(
    "",
    [
      Validators.required,
      Validators.email
    ])
    password = new FormControl(
      "",
      [
        Validators.required,
        Validators.minLength(8)
      ])

    loginForm = new FormGroup(
      {
        email : this.email,
        password : this.password
      }
    )

    login(){
      console.log(this.loginForm.value)
      if(this.loginForm.valid){
        this.router.navigateByUrl('/login')
      }
      else{
        alert(`\n\n[   Enter correct Email and Password   ]`);
      }

    }
    reset(){
      this.loginForm.reset();
    }
}
