import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from 'src/app/models/drink';

@Injectable({
  providedIn: 'root'
})

export class DrinkService {

  urlBase = "https://www.thecocktaildb.com/api/json/v1/1/";

  constructor(private http: HttpClient) { }

  getDrinksSemAlcool(tipo: string): Observable<RootObject> {
    return this.http.get<RootObject>(
      this.urlBase + "filter.php?a=" + tipo
    );
  }

  getDrinksComAlcool(tipo: string): Observable<RootObject> {
    return this.http.get<RootObject>(
      this.urlBase + "filter.php?a=" + tipo
    );
  }

  getDrinkNome(nome: string): Observable<RootObject> {
    return this.http.get<RootObject>(
      this.urlBase + "search.php?s=" + nome
    );
  }

  getDrinkId(id: string): Observable<RootObject> {
    return this.http.get<RootObject>(
      this.urlBase + "lookup.php?i=" + id
    );
  }

}