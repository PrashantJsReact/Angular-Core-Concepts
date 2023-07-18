import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { VendorsComponent } from './components/vendors/vendors.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    VendorsComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
