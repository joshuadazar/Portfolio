import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private addPaddingSubject = new Subject<boolean>();

  constructor() { }
  watchaddPaddingSubject(): Observable<boolean> {
    return this.addPaddingSubject.asObservable();
  }
  setAddPaddingSubject(status: boolean) {
    console.log(status, 'status observer');
    this.addPaddingSubject.next(status);
  }
}
