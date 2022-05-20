import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  cadastroForm = this.fb.group({
    nome:['',[Validators.required]],
    dataNasc: ['',[Validators.required]],
    cpf: ['',[Validators.required]],
    celular:['',[Validators.required, Validators.email]],
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
    alert("Um brinde a vida!");
    console.log(this.cadastroForm.value)
  }

  ngOnInit(): void {
  }

}
