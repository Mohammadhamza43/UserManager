import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {FeatureRoutingModule} from "./feature-routing.module";
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [
    HomeComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
