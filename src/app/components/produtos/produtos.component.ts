import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosService } from 'src/app/shared/services/produtos/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produtos[] = [];
  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    console.log(this.produtos)
    this.produtos = this.produtosService .getProdutos()}

}
