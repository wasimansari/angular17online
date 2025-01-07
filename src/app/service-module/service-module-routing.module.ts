import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { ServiceStndFalsComponent } from './service-stnd-fals/service-stnd-fals.component';

const routes: Routes = [
  {
    path:'',
    component:ServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceModuleRoutingModule { }
