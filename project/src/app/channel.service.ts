import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ChannelService {

  private subject = new Subject<any>();

  sendMessage(anObject: any) {
      this.subject.next(anObject);
  }
  clearMessage() {
      this.subject.next();
  }
  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }
  
}
