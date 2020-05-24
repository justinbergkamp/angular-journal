import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor() { }

  getDate(): number{
    return Date.now()
  }

  doesEntryExist(): boolean{
    return true
  }

  getDayOfWeek(): Observable<string> {
    return of("Monday");
   }

   getTimeOfDay(): Observable<string> {
     return of("evening");
    }

    getPrompt(): Observable<string> {
      return of("What are you grateful for?");
     }



}
