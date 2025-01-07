import { Component, Input, OnInit } from '@angular/core';
import { TextTransformPipe } from '../../text-transform.pipe';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [TextTransformPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  @Input() studentList=[];
  constructor(){}

  ngOnInit(){

  }

}
