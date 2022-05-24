import { Component, OnInit } from '@angular/core';
import { Drink } from 'src/app/models/drink';
import { DrinkService } from 'src/app/shared/services/drink-service/drink-service.service';


@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

  listaDrink: Drink [] = new Array<Drink>();
  listaDrinkNome: Drink [] = [];
  nomeDrink: string = "";
  public drink: Drink = {
    idDrink: "0",
    strDrink: "",
    strMeasure1: "",
    strMeasure2: "",
    strMeasure3: "",
    strCreativeCommonsConfirmed: "",
    dateModified: "",
    strDrinkThumb: "",
    strAlcoholic: "",
    strGlass: "",
    strInstructions: "",
    strInstructionsDE: "",
    strInstructionsIT: "",
    strCategory: "",
  };
  loading = false;
  comAlcool = true;

  constructor(private drinkService: DrinkService) { }

  getListaDrinkComAlcool() {
    this.loading = true;
    this.drinkService.getDrinksComAlcool("Alcoholic").subscribe({
      next: (listaDrinkComAlcool) => {
        this.listaDrink = listaDrinkComAlcool.drinks;
        this.loading = false;
        console.log( this.listaDrink);
      },
      error: (err) => {
        this.loading = false;
        this.listaDrink = [];
        alert("Lista vazia");
      }
    });
  }

  getListDrinkcomOuSemAlcool(){
    if(this.comAlcool === true){
      this.getListaDrinkComAlcool();
    }else{
      this.getListaDrinkSemAlcool();
    }
  }
 getListaDrinkSemAlcool() {
    this.loading = true;
    this.drinkService.getDrinksSemAlcool("Non_Alcoholic").subscribe({
      next: (listaDrinkSemAlcool) => {
        this.listaDrink = listaDrinkSemAlcool.drinks;
        console.log( this.listaDrink);

        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.listaDrink = [];
        alert("Lista vazia");
      }
    });
  }

  getDrinkNome() {
    this.loading = true;
    this.drinkService.getDrinkNome(this.nomeDrink).subscribe({
      next: (repositorio) => {
        console.log(repositorio);
        this.listaDrink = repositorio.drinks;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        // this.drink = [];
        alert("Nome não encontrado!");
      }
    });
  }

  getDrinkId(id:string){   
    this.drinkService.getDrinkId(id).subscribe({
      next: (repositorio) => {
        console.log(repositorio);
        this.drink = repositorio.drinks[0]
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        // this.drink = null
      }
    });
  }

  ngOnInit(): void {
    this.getListDrinkcomOuSemAlcool();
  }

}