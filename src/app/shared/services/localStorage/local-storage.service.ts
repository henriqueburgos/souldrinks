import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { UsuarioCad } from 'src/app/models/usuario-cad';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private armazenamento: Storage;
  logon: boolean = false
  usuariologado?: UsuarioCad | undefined;

  constructor() {
    this.armazenamento = window.localStorage;
  }

  set(chave: UsuarioCad): boolean {
    if (this.armazenamento) {
      this.armazenamento.setItem(chave.email.toString(), JSON.stringify(chave));
      return true;
    }
    return false;
  }

  setLogon(chave: UsuarioCad): boolean {
    if (this.armazenamento) {
      this.armazenamento.setItem("_usuarioLogon", JSON.stringify(chave));
      return true;
    }
    return false;
  }

  get(chave: string): any {
    if (this.armazenamento) {
      return this.armazenamento.getItem(chave);
    }
    return null;
  }

  remove(chave: string): boolean {
    if (this.armazenamento) {
      this.armazenamento.removeItem(chave);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.armazenamento) {
      this.armazenamento.clear();
      return true;
    }
    return false;
  }

  
  verificaLogon() {
    if (this.get("_usuarioLogon")) {
      this.logon = true
      this.usuariologado=JSON.parse(this.get("_usuarioLogon"));
    } else {
      this.logon = false
    }}

  logOut() {
    this.remove("_usuarioLogon")
    this.logon = false
  }

}
