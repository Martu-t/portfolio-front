import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginError: Boolean = false;

  constructor(
    private loginService : LoginService,
    private formBuilder : FormBuilder,
    private router:Router
  ) {
    this.form = this.formBuilder.group(
      {
        nombre: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    )
   }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    event.preventDefault;

    this.loginService.login(this.form.value).subscribe(
      (response: Boolean) => {
        if (response){
        this.router.navigate(['portfolio']);
        //window.location.reload();
        }
        else {
          this.loginError = true;
          this.form.reset();
        }
      }
    );
  }

  volverPorfolio() {
    this.router.navigate(['portfolio']);
  }

  get nombre() {
    return this.form.get('nombre');
  }

  get password() {
  return this.form.get('password');
  }


}
