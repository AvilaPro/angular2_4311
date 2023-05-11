import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  log(msg: any){
    console.log(msg);
  }
  table(msg: any){
    console.table(msg);
  }
  warn(msg: any){
    console.warn(msg);
  }
}
