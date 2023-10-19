import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  menuOpen = false
  constructor(public viewportScroller: ViewportScroller, private deviceService: DeviceDetectorService) {


    console.log('home:', this.menuOpen);
  }

  openMenu() {
    this.menuOpen = true
    console.log(this.menuOpen);
    return this.menuOpen
  }

  isMobile() {
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    return isMobile || isTablet

  }
}
