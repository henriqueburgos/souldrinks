import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
 
 
@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class QuizzComponent implements OnInit {
  prox = false;
  quizzForm = this.fb.group({
    v1: 1,
    v2: 2,
    v3: 3
  });
  quizzForm2 = this.fb.group({
    s1: 1,
    s2: 2,
    s3: 3
  });
  quizzForm3 = this.fb.group({
   a1: 0,
   a2: 2,
   a3: 3
  });
 
  get v1() {
    return this.quizzForm.get('v1')
  }
 
  get v2() {
    return this.quizzForm.get('v2')
  }
 
  get v3() {
    return this.quizzForm.get('v3')
  }
 
  get s1() {
    return this.quizzForm.get('s1')
  }
 
  get s2() {
    return this.quizzForm.get('s2')
  }
 
  get s3() {
    return this.quizzForm.get('s3')
  }
 
  get a1() {
    return this.quizzForm.get('a1')
  }
 
  get a2() {
    return this.quizzForm.get('a2')
  }
 
  get a3() {
    return this.quizzForm.get('a3')
  }
 
  onRes1() {
    console.log(`Você tirou: FESTEIRO! Drinks com cachaça, cerveja e energético são sua cara!`)
  }
 
  onRes2() {
    console.log(`Você tirou: AVENTUREIRO! Você não tem medo de ousar nos drinks, qualquer drink com os amigos é sua cara! `)
  }
 
  onRes3() {
    console.log(`Você tirou: SOSSEGADO! Drinks com vinho, conheque e licor são sua cara!`)
  }
 
  resultado() {
    for (let i = 0; i <= 3; i++) {
      console.log(`${this.onRes1}`);
    }
    for (let i = 0; i <= 6; i++) {
      console.log(`${this.onRes2}`);
    }
    for (let i = 0; i <= 9; i++) {
      console.log(`${this.onRes3}`);
    }
  }
 
  constructor(private fb: FormBuilder) {
    let btn = document.getElementById("n_btn");
    btn?.addEventListener("click", (e: Event) => this.onClique());
  }
 
  onSubmit() {
    alert(`Novo quizz`);
  }
 
  onClique() {
    alert("PROXIMOOOOO");
  }
 
  ngOnInit() {
    this.quizzForm = this.fb.group({
      firstCtrl: ['', [Validators.required]]
    });
    this.quizzForm2 = this.fb.group({
      secondCtrl: ['', [Validators.required]]
    });
    this.quizzForm3 = this.fb.group({
      thirdCtrl: ['', [Validators.required]]
    });
 
  }
 
  //#region VIAGEM IMG
  imagemViagem1: [any] = [
    'https://redesoberano.com.br/wp-content/uploads/2021/06/As-praias-mais-proximas-do-Centro-de-Porto-Seguro.jpg',
  ];
  imagemViagem2: [any] = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Everest_kalapatthar_crop.jpg/250px-Everest_kalapatthar_crop.jpg',
  ];
  imagemViagem3: [any] = [
    'https://gaagrosolucoes.com.br/wp-content/uploads/2020/12/Imagem-blog-GA-ferias.jpg',
  ];
  //#endregion
 
  //#region SEXTA IMG
  imagemSexta1: [any] = [
    'https://lets.events/blog/wp-content/uploads/2017/09/top-da-balada-o-que-faz-uma-balada-ter-sucesso.jpeg'
  ];
  imagemSexta2: [any] = [
    'https://homemalpha.com.br/wp-content/uploads/2019/03/Habilidades-sociais-fazer-amigos.jpg'
  ];
  imagemSexta3: [any] = [
    'https://www.revistaliving.com.br/wp-content/uploads/2020/03/livros-abertura.jpg'
  ];
  //#endregion
 
  //#region ANIMAL IMG
  imagemAnimal1: [any] = [
    'https://img.r7.com/images/ornitorrinco-bebe-viral-escultura-pedra-18022020133933895'
  ];
  imagemAnimal2: [any] = [
    'https://t2.ea.ltmcdn.com/pt/posts/5/2/6/nome_para_pato_de_estimacao_20625_6_600.webp',
  ];
  imagemAnimal3: [any] = [
    'https://static.escolakids.uol.com.br/2019/07/coala-alimentando-se.jpg',
  ];
  //#endregion
 
}
