import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  private sideNavOpened = new BehaviorSubject<boolean>(true);

  constructor() { }

  toggleSideNav(){
    this.sideNavOpened.next(!this.sideNavOpened.value);
  }

  getSideNavOpened(){
    return this.sideNavOpened.asObservable();
  }

  setSideNavOpened(value:boolean){
    this.sideNavOpened.next(value);
  }

}
