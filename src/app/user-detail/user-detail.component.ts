import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { CommonModule } from '@angular/common';
import { TextTransformPipe } from '../text-transform.pipe';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule,TextTransformPipe,UserListComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  constructor(private _userService:UserServiceService){}
  studentList=[];
  ngOnInit(){
    this._userService.getData().subscribe(res=>{
      this.studentList = res;
    })
  }
}
