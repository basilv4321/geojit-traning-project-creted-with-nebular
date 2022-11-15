import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbSidebarModule,
    FormsModule,
    NbLayoutModule,
  ]
})
export class HomeModule { }
