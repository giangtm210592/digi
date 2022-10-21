import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebLayoutComponent } from './web-layout/web-layout.component';
import { WebHeaderModule } from '@digi/web/core/ui/web-header';
import { WebSidebarModule } from '@digi/web/core/ui/web-sidebar';
import { WebMainViewModule } from '@digi/web/core/ui/web-main-view';
import { WebFooterModule } from '@digi/web/core/ui/web-footer';

@NgModule({
  imports: [CommonModule, WebHeaderModule, WebSidebarModule, WebMainViewModule, WebFooterModule],
  declarations: [WebLayoutComponent],
  exports: [WebLayoutComponent]
})
export class WebLayoutModule {}
