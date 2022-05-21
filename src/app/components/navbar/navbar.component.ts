import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nomeDoApp:string = "SoulDrinks";
  public isMenuCollapsed = true;
  imagem: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFMx9lQCCbtV4t5mahedmiMzuja3asRHs3sA&usqp=CAU"

  constructor() { }

  ngOnInit(): void {
  }

}
