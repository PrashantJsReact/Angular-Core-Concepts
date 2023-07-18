import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { DevelopersComponent } from './components/developers/developers.component';
import { ComponyComponent } from './components/compony/compony.component';


@NgModule({
  declarations: [
    DevelopersComponent,
    ComponyComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
