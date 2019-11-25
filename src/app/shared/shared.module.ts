import { NgModule } from "@angular/core";

import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        NotfoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        FooterComponent,
      ],
      exports:[
        NotfoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        FooterComponent,
      ],
})
export class SharedModule { }