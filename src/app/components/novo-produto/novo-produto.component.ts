import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/shared/services/localStorage/local-storage.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  constructor(private fb: FormBuilder, private ls: LocalStorageService) { }

  adicaoProdForm = this.fb.group({
    imagem:['',[Validators.required]],
    nomeDoProduto: ['',[Validators.required]],
    descricao: ['',[Validators.required]],
    preco:['',[Validators.required]],
    emPromocao:['',[Validators.required]],
    desconto:['',[Validators.required]],
    categoria:['', [Validators.required]]
  })

  get imagem() {
    return this.adicaoProdForm.get('imagem')
  }

  get nomeDoProduto() {
    return this.adicaoProdForm.get('nomeDoProduto')
  }

  get descricao() {
    return this.adicaoProdForm.get('descricao')
  }

  get preco () {
    return this.adicaoProdForm.get('preco');
  }

  get emPromocao() {
    return this.adicaoProdForm.get('emPromocao');
  }

  get desconto() {
    return this.adicaoProdForm.get('desconto');
  }

  get categoria() {
    return this.adicaoProdForm.get('categoria');
  }

  onSubmit() {
    this.ls.set(this.adicaoProdForm.value)
       alert("Produto adicionado");
    console.log(this.adicaoProdForm.value)
  }

  ngOnInit(): void {
  }

}
