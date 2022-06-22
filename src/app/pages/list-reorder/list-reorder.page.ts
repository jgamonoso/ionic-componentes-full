import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup, ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  personajes: string[] = ['Batman', 'Superman', 'Aquaman', 'Wonderwoman', 'Flash'];

  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any) {
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice( event.detail.to, 0, itemMover);

    event.detail.complete();

    console.log(this.personajes);
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }
}
