import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  limit: number = 40;
  data: any[] = Array(20)
  constructor() { }

  ngOnInit() {
  }

  loadData() {
    console.log('entry infiniteScroll.disabled: ' + this.infiniteScroll.disabled);
    setTimeout(() => {
      const newArray = Array(20);
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length >= this.limit) {
        this.infiniteScroll.disabled = true;
      } else {
        this.data.push( ...newArray );
        this.infiniteScroll.complete();
      }
      console.log('exit infiniteScroll.disabled: ' + this.infiniteScroll.disabled);
    }, 1500);
  }

  toggleInfiniteScroll(value: boolean) {
    console.log('value: ' + value);
    console.log('this.data.length: ' + this.data.length);
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    console.log('toogle infiniteScroll.disabled: ' + this.infiniteScroll.disabled);
  }

}
