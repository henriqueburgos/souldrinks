import { Component, OnInit } from '@angular/core';
import { UsuarioCad } from 'src/app/models/usuario-cad';
import { LocalStorageService } from 'src/app/shared/services/localStorage/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nomeDoApp:string = "SoulDrink";
  public isMenuCollapsed = true;
 
  logon: boolean=false
  usuarioLogado!:UsuarioCad;
  logout(){
    this.ls.logOut()
    this.logon=false
  }

  constructor(private ls:LocalStorageService) { }

  
  ngOnInit(): void {
    if (this.ls.get("_usuarioLogon")) {
      this.logon = true
      this.usuarioLogado=JSON.parse(this.ls.get("_usuarioLogon"));
    } else {
      this.logon = false
    }}
    
   }

