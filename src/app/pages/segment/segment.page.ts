import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Superheroe } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superheroes: Observable<Superheroe[]>;

  textoBuscar: string = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.superheroes = this.dataService.getSuperheroes();
  }

  segmentChanged(event){
    this.textoBuscar = event.detail.value;
  }
}
