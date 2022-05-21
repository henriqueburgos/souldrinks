import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/shared/services/localStorage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private fb: FormBuilder, private ls:LocalStorageService) { }
 

  loginForm = this.fb.group({
    email:['', [Validators.required,Validators.email]],
    senha:['', [Validators.required, Validators.minLength(8)]],
  })

  get email() {
    return this.loginForm.get('email');
  }

  get senha() {
    return this.loginForm.get('senha');
  }

  onSubmit() {
    if(this.ls.get(this.email?.value)){
    alert(`Olá ${this.email?.value}, seja bem vindo(a)!`);
  }else{
    alert("você ainda nao possui cadastro")
  }
}

  ngOnInit(): void {
  }

}
