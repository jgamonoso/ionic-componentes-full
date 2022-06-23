import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums: Observable<any>; //modo 1
  // albums: any[] = []; //modo 2

  textoBuscar: string = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.albums = this.dataService.getAlbums(); //modo 1
    // this.dataService.getAlbums(). subscribe( (albumes: any) => {
    //   this.albums = albumes
    // } ); //modo 2
  }

  onSearchChange(event){
    this.textoBuscar = event.detail.value;
  }
}
