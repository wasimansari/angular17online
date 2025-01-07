import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { PriceComponent } from './price/price.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { OnlinetestComponent } from './onlinetest/onlinetest.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'home',component:HomeComponent},
    {path:'feature',component:FeatureComponent},
    {path:'price',component:PriceComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'students',component:UserDetailComponent},
    {path:'service', 
        loadChildren: ()=>{
            console.log("Hello child")
        return import ('./service-module/service-module.module').then(m=>m.ServiceModuleModule) // lazy loading module
        }
    },
    {path:'onlinetest',component:OnlinetestComponent}
];

