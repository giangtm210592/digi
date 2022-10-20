import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebLayoutComponent } from './web-layout/web-layout.component';
import { WebHeaderModule } from '@digi/web/shell/ui/web-header';
import { WebSidebarModule } from '@digi/web/shell/ui/web-sidebar';
import { WebMainViewModule } from '@digi/web/shell/ui/web-main-view';
import { WebFooterModule } from '@digi/web/shell/ui/web-footer';

@NgModule({
  imports: [CommonModule, WebHeaderModule, WebSidebarModule, WebMainViewModule, WebFooterModule],
  declarations: [WebLayoutComponent],
  exports: [WebLayoutComponent]
})
export class WebLayoutModule {}
