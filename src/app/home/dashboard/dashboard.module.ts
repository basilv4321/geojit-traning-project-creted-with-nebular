import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { IndianrupeeComponent } from './indianrupee/indianrupee.component';
import { GraphsComponent } from './graphs/graphs.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { FormsModule } from '@angular/forms';
// import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    WelcomepageComponent,
    IndianrupeeComponent,
    GraphsComponent,
    CurrenciesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // CardModule,
    FormsModule
  ]
})
export class DashboardModule { }
