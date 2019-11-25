import { NgModule } from "@angular/core";

import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graph1Component,
      ],
      exports:[
        DashboardComponent,
        ProgressComponent,
        Graph1Component,
      ],
      imports: [
        SharedModule,
        PagesRoutingModule
      ],
})
export class PagesModule { }