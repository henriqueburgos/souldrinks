import { Injectable } from '@angular/core';
import { UsuarioCad } from 'src/app/models/usuario-cad';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private armazenamento: Storage;

  constructor() {
    this.armazenamento = window.localStorage;
  }

  set(chave:UsuarioCad): boolean {
    if (this.armazenamento) {
      this.armazenamento.setItem(chave.email.toString(),  JSON.stringify(chave));
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

}