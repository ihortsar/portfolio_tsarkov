import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public deviceService: DeviceDetectorService,) {
    window.addEventListener('resize', () => this.isMobile());
  }
  sent = false
  menuOpen = false


  openMenu() {
    this.menuOpen = true
    return this.menuOpen
  }

  isMobile() {
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    return isMobile || isTablet || (window.innerWidth < 1100)

  }
}
