import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{
  getPrice:any;
  constructor(private _userService:UserServiceService){}
  ngOnInit(){
    this._userService.getSubjectData().subscribe(price=>{
      this.getPrice = price;
    });

    // subscribe subjectBehavior
    // this._userService.getBehaviorData().subscribe(data=>{
    //   this.getPrice = data;
    // });

  }
}
