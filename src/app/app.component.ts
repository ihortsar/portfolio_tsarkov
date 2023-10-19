import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'portfolio_tsarkov';


  constructor(public viewportScroller: ViewportScroller) { }


  public handleAnchor(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    console.log(elementId);
    
  }
}
