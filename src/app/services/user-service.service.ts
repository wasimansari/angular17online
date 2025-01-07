import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import mockData from '../common';


@Injectable()
export class UserServiceService {
  userDetail:any[]= mockData;
  subjectData = new Subject<any>();
  private behaviorData = new BehaviorSubject<any>("Hello");
  url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private _http:HttpClient) { }

  getData():Observable<any>{
    return this._http.get<any>(this.url);
  }

  sendData(data:any){
    this.subjectData.next(data);
  }

  getSubjectData():Observable<any>{
    return this.subjectData.asObservable();
  }

  sendBehaviorData(data:any){
    this.behaviorData.next(data);
  }
  getBehaviorData(){
    return this.behaviorData;
  }
}
