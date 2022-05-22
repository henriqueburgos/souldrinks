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
      preco: 42.00,
      emPromocao: true,
      desconto: 0.25,
      categoriaBebida: CategoriaBebida.WHISKY
    },
    {
      imagem: "https://www.thecocktaildb.com/images/ingredients/Bourbon.png",
      nomeProduto: "Bacardi",
      descricao: " 1L | Light rum |40%",
      preco: 42.00,
      emPromocao: true,
      desconto: 0.25,
      categoriaBebida: CategoriaBebida.RUM
    },
    {
      imagem: "https://cemporcentoskate.com.br/wp-content/uploads/2021/11/2DE86E9B-081D-4536-9F31-93912534867C-759x297.png",
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
      imagem: "https://www.thecocktaildb.com/images/ingredients/Dry%20Vermouth.png",
      nomeProduto: "Vermouth Martini",
      descricao: "750ml | Vermouth Extra Dry | 18%",
      preco: 110.0,
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
      imagem: "https://m.media-amazon.com/images/I/51okfLNl6uL._AC_SX679_.jpg",
      nomeProduto: "Absinthe Verte",
      descricao: "700ml | Absinto verde | 52%",
      preco: 109.80,
      emPromocao: true,
      desconto: 0.05, //0..1
      categoriaBebida: CategoriaBebida.ABSINTO
    },
    {
      imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_842482-MLB46029716401_052021-F.webp",
      nomeProduto: "Porto Morretes Premium",
      descricao: "700ml | Cachaça Carvalho Orgânica | 39%",
      preco: 149.0,
      emPromocao: false,
      desconto: 0.05, //0..1
      categoriaBebida: CategoriaBebida.CACHACA
    },
    {
      imagem: "https://m.media-amazon.com/images/I/51pF1KqX0eL._AC_SX679_.jpg",
      nomeProduto: "Guinness",
      descricao: "440ml | Cerveja Draught | 4.2%",
      preco: 55.0,
      emPromocao: true,
      desconto: 0.25, //0..1
      categoriaBebida: CategoriaBebida.CERVEJA
    },
    {
      imagem: "https://m.media-amazon.com/images/I/416UfZ94vqS.jpg",
      nomeProduto: "Conhaque Rémy Martin",
      descricao: "700ml | Conhaque Brandy | 40%",
      preco: 607.0,
      emPromocao: false,
      desconto: 0.05, //0..1
      categoriaBebida: CategoriaBebida.CONHAQUE
    },
    {
      imagem: "https://d3gdr9n5lqb5z7.cloudfront.net/fotos/1643807834213.webp",
      nomeProduto: "Saque SAKEIH",
      descricao: "750ml | Saque seco | 14%",
      preco: 14.90,
      emPromocao: false,
      desconto: 0.15, //0..1
      categoriaBebida: CategoriaBebida.SAQUE
    },
    {
      imagem: "https://carrefourbr.vtexassets.com/arquivos/ids/199528/8246378_1.jpg?v=637272444227630000",
      nomeProduto: "Campo Largo",
      descricao: "750ml | Vinho tinto suave | 10%",
      preco: 22.0,
      emPromocao: true,
      desconto: 0.45, //0..1
      categoriaBebida: CategoriaBebida.VINHO
    },

  ]
  

  constructor() { }
}
