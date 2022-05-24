import { Component, Input, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  @Input('dadoProduto')produto!: Produtos; // Torna a propriedade uma propriedade de entrada do componente

  constructor() { }

  ngOnInit(): void {
  }

}
