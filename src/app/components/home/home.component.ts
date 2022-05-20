import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  imagem: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFcUST9q5zJ4_pYp-kP1Dq78vDXndT0T-Ig&usqp=CAU"


  constructor() { }

  ngOnInit(): void {
  }

}
