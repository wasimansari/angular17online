import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceModuleRoutingModule } from './service-module-routing.module';
import { ServiceStndFalsComponent } from './service-stnd-fals/service-stnd-fals.component';


@NgModule({
  declarations: [
    ServiceStndFalsComponent
  ],
  imports: [
    CommonModule,
    ServiceModuleRoutingModule
  ]
})
export class ServiceModuleModule { }
