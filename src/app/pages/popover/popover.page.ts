import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      event: event,
      translucent: true,
      backdropDismiss: false
    });

    await popover.present();

    // const respuesta = await modal.onDidDismiss();
    // console.log(respuesta);

    // const { data } = await modal.onDidDismiss();
    // console.log(data);

    const { data } = await popover.onWillDismiss();
    console.log(data);
  }
}
