import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router){}
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
        this.router.navigateByUrl('/home');
      }
      else{
        alert(`\n\n[   Enter correct Email and Password   ]`);
      }
    
    }
    reset(){
      this.loginForm.reset();
    }

}
