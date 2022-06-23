import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  // isPopoverOpen: boolean= false;

  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  // onClick(){
  //   this.isPopoverOpen = !this.isPopoverOpen;
  // }

  async presentPopover() {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      event: event,
      translucent: true,
      backdropDismiss: false
    });

    await popover.present();

    // const { role } = await popover.onDidDismiss();
    // this.roleMsg = `Popover dismissed with role: ${role}`;
  }
}
