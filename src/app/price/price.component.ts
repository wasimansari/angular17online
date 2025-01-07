import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent implements OnInit {
  userData={};
  priceValue:string;
  constructor(private _userService:UserServiceService){}
  @ViewChild('price', { static: true }) input: ElementRef<HTMLInputElement>;
  ngOnInit(){
    this._userService.getData().subscribe(data=>{
    this.userData = data;
    console.log(this.userData)
    })
  }

  //using subjectBehavior
  // sendPrice(price:any){
  //   this.priceValue = price.value;
  //   this._userService.sendBehaviorData(price.value);
  // }

  
  sendPrice(price:any){
    this.priceValue = price.value;
    this._userService.sendData(price.value);
  }

  ngAfterViewInit() {

 }

}
