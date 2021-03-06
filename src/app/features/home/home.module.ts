import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home/home.component';
import { SharedModule } from "../../shared/shared.module";
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgxChartsModule
  ]
})
export class HomeModule { }
