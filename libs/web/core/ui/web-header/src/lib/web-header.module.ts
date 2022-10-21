import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebHeaderComponent } from './web-header/web-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WebHeaderComponent],
  exports: [WebHeaderComponent]
})
export class WebHeaderModule {}
