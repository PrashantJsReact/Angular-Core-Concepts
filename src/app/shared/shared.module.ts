import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from './components/property/property.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowForDirective } from './directives/show-for.directive';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';

@NgModule({
  declarations: [PropertyComponent, ShowForDirective, SanitizeHtmlPipe],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [PropertyComponent],
})
export class SharedModule {}
