import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente, Superheroe } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }

  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }


  getSuperheroes() {
    return this.http.get<Superheroe[]>('/assets/data/superheroes.json')
        .pipe(
          delay ( 1500 )
        );
  }
}
