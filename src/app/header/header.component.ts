import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public viewportScroller: ViewportScroller) { }

  
  public handleAnchor(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    console.log(elementId);

  }

}
