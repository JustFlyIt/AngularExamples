import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataElementService {

  private subject1 = new Subject<any>();
  private subject2 = new Subject<any>();
  private subject3 = new Subject<any>();
  private subject4 = new Subject<any>();
  private subject5 = new Subject<any>();
  private subject6 = new Subject<any>();
  private subject7 = new Subject<any>();
  private subject8 = new Subject<any>();
  private subject9 = new Subject<any>();

  //  API ---------------------------------------------------------------
  sendScrollToTableEntryClickEvent(index: number) {
    this.subject1.next(index);
  }

  sendScrollToMatListEntryClickEvent(index: number) {
    this.subject2.next(index);
  }

  sendScrollToNextMatListEntry() {
    this.subject6.next(0);
  }

  sendHighlightMatListFirst() {
    this.subject7.next(0);
  }
  
  sendHighlightMatListSecond() {
    this.subject8.next(0);
  }

  sendHightlightMatListThird() {
    this.subject9.next(0);
  }

  sendScrollToFlexBoxEntryClickEvent(index: number) {
    this.subject3.next(index);
  }

  sendCycleMatListEntriesClickEvent() {
    this.subject4.next(0);
  }
    
  sendCycleFlexBoxEntriesClickEvent() {
    this.subject5.next(0);
  }

  // SUPPORT ---------------------------------------------------------------
  getScrollToTableEntryClickEvent(): Observable<any> {
    return this.subject1.asObservable();
  }

  //=====================

  getScrollToMatListEntryClickEvent(): Observable<any> {
    return this.subject2.asObservable();
  }

  getScrollToNextMatListEntry(): Observable<any>  {
    return this.subject6.asObservable();
  }

  getMatListHighlightFirst(): Observable<any>  {
    return this.subject7.asObservable();
  }
  
  getMatListHighlightSecond(): Observable<any>  {
    return this.subject8.asObservable();
  }

  getMatListHightlightThird(): Observable<any>  {
    return this.subject9.asObservable();
  }

//=======================

getScrollToFlexBoxEntryClickEvent(): Observable<any> {
    return this.subject3.asObservable();
  }
  
  getCycleFlexBoxEntriesClickEvent(): Observable<any> {
    return this.subject5.asObservable();
  }
}
