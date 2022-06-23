import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('doRefresh');

    setTimeout(() => {
      this.items = Array(20);
      console.log('Async operation has ended');
      event.target.complete();
    }, 1500);
  }

}
