import { Component, OnInit } from '@angular/core';
import { cardGrid } from 'src/app/models/cardGrid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  images = ["assets/903.jpg", "assets/901.jpg", "assets/940.jpg"]

  public cardGrid: cardGrid[] = [
    {
    imagem: "https://images.tcdn.com.br/img/img_prod/686651/kit_gin_os_classicos_london_dry_beefeater_bombay_sapphire_tanqueray_gordon_s_35990147_1_6ecbada7b7209bbec80b05f1008a8d85.jpg",
    alt: "Gins",
    nomeProduto: "Gins",
    descricao: "Clássicos, cítricos, florais e aromáticos.",
  },
  {
    imagem: "https://images.tcdn.com.br/img/img_prod/686651/selecao_de_cachacas_signature_merlet_antonieta_jequitiba_leblon_weber_haus_amburana_ypioca_150_anos_35990073_1_20201107103958.jpg",
    alt: "Cachaças",
    nomeProduto: "Cachaças",
    descricao: "Que tal uma caipirinha no capricho?",
  },
  {
    imagem: "https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/k/i/kit-vinhos-campe_es-de-venda.jpg",
    alt: "Vinhos",
    nomeProduto: "Vinhos",
    descricao: "Aqui você encontra as melhores safras.",
  },
  {
    imagem: "https://cdn.awsli.com.br/1000x1000/1094/1094060/produto/112084719/0272333a3b.jpg",
    alt: "Cervejas Artesanais",
    nomeProduto: "Cervejas Artesanais",
    descricao: "Com sabores mais acentuados e ingredientes bem definidos.",
  },  
]

  constructor() {}

  ngOnInit(): void {
  }


}
