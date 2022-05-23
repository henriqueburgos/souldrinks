import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/shared/services/localStorage/local-storage.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private fb: FormBuilder, private ls:LocalStorageService) { }

  cadastroForm = this.fb.group({
    nome:['',[Validators.required, Validators.minLength(5)]],
    dataNasc: ['',[Validators.required]],
    cpf: ['',[Validators.required]],
    celular:['',[Validators.required]],
    email:['',[Validators.required, Validators.email]],
    senha:['',[Validators.required, Validators.minLength(8)]],
  })

  get nome() {
    return this.cadastroForm.get('nome')
  }

  get dataNasc() {
    return this.cadastroForm.get('dataNasc')
  }

  get cpf() {
    return this.cadastroForm.get('cpf')
  }

  get celular() {
    return this.cadastroForm.get('celular');
  }

  get email() {
    return this.cadastroForm.get('email');
  }

  get senha() {
    return this.cadastroForm.get('senha');
  }

  onSubmit() {
    this.ls.set(this.cadastroForm.value)
       alert("Cadastro realizado com sucesso! Um brinde a vida!");
    console.log(this.cadastroForm.value)
  }

  ngOnInit(): void {
  }

}
