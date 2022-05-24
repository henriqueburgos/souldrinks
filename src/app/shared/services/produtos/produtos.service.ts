import { Injectable } from '@angular/core';
import { CategoriaBebida, Produtos } from 'src/app/models/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private produtos: Produtos[] = [
    {
      imagem: "https://www.thecocktaildb.com/images/ingredients/Jack%20Daniels.png",
      nomeProduto: "Jack Daniel's",
      descricao: " 1L | Whisky | 40%",
      preco: 113.00,
      emPromocao: true,
      desconto: 0.25,
      categoriaBebida: CategoriaBebida.WHISKY
    },
    {
      imagem: "https://www.thecocktaildb.com/images/ingredients/Bourbon.png",
      nomeProduto: "Bacardi",
      descricao: " 1L | Light rum | 40%",
      preco: 42.00,
      emPromocao: true,
      desconto: 0.25,
      categoriaBebida: CategoriaBebida.RUM
    },
    {
      imagem: "https://bomdebeer.vteximg.com.br/arquivos/ids/156932-1000-1000/Energetico-TNT-Original-473ml-7897395031626_1.png?v=637732718284000000",
      nomeProduto: "Energético TNT",
      descricao: "Un | 0% de açúcar | Taurina e cafeína | Reduz a sensação de cansaço e sonôlencia",
      preco: 5.49,
      emPromocao: true,
      desconto: 0.1, //0..1
      categoriaBebida: CategoriaBebida.ENERGETICO
    },
    {
      imagem: "https://www.thecocktaildb.com/images/ingredients/Gin.png",
      nomeProduto: "Plymouth",
      descricao: "750ml | Gin Seco | 41.2%",
      preco: 150.0,
      emPromocao: false,
      desconto: 0.1, //0..1
      categoriaBebida: CategoriaBebida.GIM
    },
    {
      imagem: "https://www.thecocktaildb.com/images/ingredients/Rum.png",
      nomeProduto: "Captain Morgan",
      descricao: "700ml | Dark Rum | 37%",
      preco: 110.0,
      emPromocao: false,
      desconto: 0.2, //0..1
      categoriaBebida: CategoriaBebida.RUM
    },
    {
      imagem: "https://www.thecocktaildb.com/images/ingredients/Dry%20Vermouth.png",
      nomeProduto: "Vermouth Martini",
      descricao: "750ml | Vermouth Extra Dry | 18%",
      preco: 110.0,
      emPromocao: true,
      desconto: 0.05, //0..1
      categoriaBebida: CategoriaBebida.VINHO
    },
    {
      imagem: "https://www.thecocktaildb.com/images/ingredients/Scotch.png",
      nomeProduto: "Scoth",
      descricao: "700ml | The Macallan Amber - single Malt | 40%",
      preco: 2100.0,
      emPromocao: false,
      desconto: 0.05, //0..1
      categoriaBebida: CategoriaBebida.WHISKY
    },
    {
      imagem: "https://www.thecocktaildb.com/images/ingredients/Brandy.png",
      nomeProduto: "Brandy",
      descricao: "750ml | Korbel Brandy | 40%",
      preco: 10.0,
      emPromocao: false,
      desconto: 0.1, //0..1
      categoriaBebida: CategoriaBebida.CHAMPANHE
    },
    {
      imagem: "https://www.thecocktaildb.com/images/ingredients/Campari.png",
      nomeProduto: "Campari",
      descricao: "700ml | Bitter | 20%",
      preco: 80.0,
      emPromocao: true,
      desconto: 0.05, //0..1
      categoriaBebida: CategoriaBebida.VINHO
    },
    {
      imagem: "https://www.thecocktaildb.com/images/ingredients/Vodka.png",
      nomeProduto: "Sminorff",
      descricao: "998ml | Vodka | 40%",
      preco: 35.90,
      emPromocao: true,
      desconto: 0.35, //0..1
      categoriaBebida: CategoriaBebida.VODKA
    },
    {
      imagem: "https://www.thecocktaildb.com/images/ingredients/Amaretto.png",
      nomeProduto: "Disaronno",
      descricao: "700ml | Licor italiano | 28%",
      preco: 110.0,
      emPromocao: true,
      desconto: 0.15, //0..1
      categoriaBebida: CategoriaBebida.LICOR
    },
    {
      imagem: "https://www.thecocktaildb.com/images/ingredients/Champagne.png",
      nomeProduto: "Chandon",
      descricao: "750ml | Champagne branco seco | 13.5%",
      preco: 360.0,
      emPromocao: false,
      desconto: 0.05, //0..1
      categoriaBebida: CategoriaBebida.CHAMPANHE
    },
    {
      imagem: "https://www.thecocktaildb.com/images/ingredients/Tequila.png",
      nomeProduto: "Sierra",
      descricao: "700ml | Tequila mexicana | 38%",
      preco: 270.0,
      emPromocao: false,
      desconto: 0.10, //0..1
      categoriaBebida: CategoriaBebida.TEQUILA
    },
    {
      imagem: "https://www.thecocktaildb.com/images/ingredients/Ricard.png",
      nomeProduto: "Ricard",
      descricao: "1L | Absinto francês | 52%",
      preco: 509.80,
      emPromocao: true,
      desconto: 0.20, //0..1
      categoriaBebida: CategoriaBebida.ABSINTO
    },
    {
      imagem: "https://www.thecocktaildb.com/images/ingredients/Apricot%20Brandy.png",
      nomeProduto: "Apricot Brandy",
      descricao: "1L | Liquor de pêssego | 25%",
      preco: 49.0,
      emPromocao: false,
      desconto: 0.05, //0..1
      categoriaBebida: CategoriaBebida.CACHACA
    },
    {
      imagem: "https://www.thecocktaildb.com/images/ingredients/Root%20beer.png",
      nomeProduto: "Root Beer",
      descricao: "440ml | Cerveja Draught | 4.2%",
      preco: 55.0,
      emPromocao: true,
      desconto: 0.25, //0..1
      categoriaBebida: CategoriaBebida.CERVEJA
    },
    {
      imagem: "https://www.thecocktaildb.com/images/ingredients/Triple%20Sec.png",
      nomeProduto: "Cointreau",
      descricao: "750ml | Conhaque Brandy | 40%",
      preco: 607.0,
      emPromocao: false,
      desconto: 0.05, //0..1
      categoriaBebida: CategoriaBebida.CONHAQUE
    },
    {
      imagem: "https://www.thecocktaildb.com/images/ingredients/White%20Wine.png",
      nomeProduto: "Cullen",
      descricao: "750ml | Vinho branco suave - Semillion | 10%",
      preco: 82.0,
      emPromocao: true,
      desconto: 0.45, //0..1
      categoriaBebida: CategoriaBebida.VINHO
    },

  ]
  getProdutos(): Produtos[] {
    return this.produtos;
  }

  addProduto(produto: Produtos) {
    this.produtos.push(produto);
  }

  constructor() { }
}
