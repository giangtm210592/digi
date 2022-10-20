import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebMainViewComponent } from './web-main-view/web-main-view.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebMainViewComponent],
  exports: [WebMainViewComponent]
})
export class WebMainViewModule {}
