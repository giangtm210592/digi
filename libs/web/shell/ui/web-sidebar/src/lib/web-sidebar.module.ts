import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebSidebarComponent } from './web-sidebar/web-sidebar.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebSidebarComponent],
  exports: [WebSidebarComponent]
})
export class WebSidebarModule {}
