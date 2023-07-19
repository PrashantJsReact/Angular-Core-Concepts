import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { MaterialComponent } from './material/material.component';


@NgModule({
  declarations: [
    NgTemplateComponent,
    MaterialComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule
  ]
})
export class AngularModule { }
