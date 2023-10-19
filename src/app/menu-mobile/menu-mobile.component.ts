import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent {
  constructor(private viewportScroller: ViewportScroller, public home: HomeComponent) { }

  public handleAnchor(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  closeDialog() {
    this.home.menuOpen = false
    console.log(this.home.menuOpen);
    
  }
}
