import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenLinkService {

  constructor() { }

  open(url){
    window.open(url);
  }
}
