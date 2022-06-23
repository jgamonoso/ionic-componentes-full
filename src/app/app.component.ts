import { Component, ViewChild } from '@angular/core';
import { IonMenu } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonMenu) ionMenu: IonMenu;

  componentes: Observable<Componente[]>;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }
}
