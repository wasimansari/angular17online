import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserServiceService } from './services/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import mockData from './common';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[UserServiceService]
})
export class AppComponent implements OnInit {
  title = 'AngProject17';
  data={}
  parent_data:any[]= mockData;


  constructor(private _userService:UserServiceService){}

  ngOnInit(): void {
  }

  onChildButtonClicked(e:any){
    console.log('Button in child component was clicked!',e);
    if(e){
      alert("parent received data from child")
    }
  }

  shareData(){
    console.log("Hello")
  }
}
