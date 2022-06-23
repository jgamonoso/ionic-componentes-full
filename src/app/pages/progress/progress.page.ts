import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje: number = 0;

  lowerPorcentaje: number = 0.2;
  upperPorcentaje: number = 0.8;

  constructor() { }

  ngOnInit() {
  }

  rangeChange1(event){
    let percent = event.detail.value/100
    this.porcentaje = percent;
  }

  rangeChange2(event){
    let lowerPercent = event.detail.value.lower/100
    let upperPercent = event.detail.value.upper/100

    this.lowerPorcentaje = lowerPercent;
    this.upperPorcentaje = upperPercent;
  }
}
