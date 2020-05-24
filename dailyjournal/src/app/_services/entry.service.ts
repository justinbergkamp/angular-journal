import { Injectable } from '@angular/core';

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



}
