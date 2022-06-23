import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PopoverInfoComponent } from './popover-info/popover-info.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PopoverInfoComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PopoverInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
