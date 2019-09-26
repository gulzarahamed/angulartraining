import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PubsubService {

  private subject:Subject<any>= new Subject();
  private loginSubject:Subject<any>= new Subject();
  
  constructor() { 

  }

  getSubscriber(){
    return this.subject.asObservable();
  }

  getPublisher(){
    return this.subject;
  }

  getLoginSubscriber(){
    return this.loginSubject.asObservable();
  }

  getLoginPublisher(){
    return this.loginSubject;
  }
}
