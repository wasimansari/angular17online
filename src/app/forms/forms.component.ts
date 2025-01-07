import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
  // providers:[UserServiceService]
})
export class FormsComponent implements OnInit{
  myForm: FormGroup;
  @Input() data!:any[];
  isValid:boolean=false;
  userName!:string;
  receiptName!:string;
  @Output() buttonClicked = new EventEmitter<void>();
  @Output() buttonClickedParent = new EventEmitter<void>();

  constructor(
    private fb:FormBuilder,
    private el:ElementRef
  ){
    
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
    console.log("constructor called")
  }
  ngOnInit(){
    // console.log("my form comp")
    // this._userService.getData().subscribe(data=>{
    //   console.log(data)
    // }
    // );
    // console.log("ngoninit called")
  }


  onSubmit(e:any) {
    if (this.myForm.valid) {
      this.isValid = true;
      console.log(this.myForm.value);
    }
    this.buttonClicked.emit(this.myForm.value);
  }

  shareData(data:any){
    this.isValid = true;
    console.log("click from parent",data)
  }

  getValue(userName:HTMLInputElement,receptName:HTMLInputElement){
    console.log(this.el.nativeElement)
    // this.userName = userName.value;
    // this.receiptName =  receptName.value;

  }

}
