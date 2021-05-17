import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  data: any = {
    signUpData : {}
  }
  constructor() { }

  setSignUpData(val) {
    this.data.signUpData = val;
  }

  getSignUpData() {
    return this.data.signUpData;
  }
}
