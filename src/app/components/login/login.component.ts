import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioCad } from 'src/app/models/usuario-cad';
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

logon:boolean=false
usuarioLogado?:UsuarioCad
blocklogin: boolean = false;
numTent:number=0

  onSubmit() {
    if (this.ls.get(this.email?.value)) {
      let acesso: UsuarioCad = JSON.parse(this.ls.get(this.email?.value))
      if (acesso.senha == this.senha?.value) {
        this.ls.setLogon(acesso);
        this.logon=true;
        alert(`Olá ${acesso.nome}, seja bem vindo(a)!`);
      } else if (acesso.senha != this.senha?.value && this.numTent <3) {
        this.numTent++
        alert(`Senha incorreta! Você possui ${3 - this.numTent} tentativas`);
      } else if (acesso.senha != this.senha?.value && this.numTent < 4) {
        this.numTent++
        alert(`Voce está indo para sua ultima tentativa.`)
      } else if (acesso.senha != this.senha?.value && this.numTent >= 4) {
        this.blocklogin = true
        alert(`Você errou todas as suas tentativas, por favor aguarde ou recupere sua senha.`)
      }
    } else {
      alert("você ainda nao possui cadastro")
    }
  }

  ngOnInit(): void {
    if (this.ls.get("_usuarioLogon")) {
      this.logon = true
      this.usuarioLogado=JSON.parse(this.ls.get("_usuarioLogon"));
    } else {
      this.logon = false
    }}
    
   }


