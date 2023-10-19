import { Component, Inject, OnInit } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.scss']
})
export class MyWorksComponent implements OnInit {

  isMobileDevice
  projects: any


  constructor(private deviceService: DeviceDetectorService) {

    this.isMobileDevice = this.isMobile()

    this.projects = [
      new ProjectsComponent('http://ihor-tsarkov.developerakademie.net/Join/index.html',
        'https://github.com/ihortsar/Join',
        'join.png',
        'Join',
        'HTML | CSS | JavaScript',
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'),
      new ProjectsComponent('http://ihor-tsarkov.developerakademie.net/Lost%20treasures/index.html',
        'https://github.com/ihortsar/lostTreasures',
        'lost_treasures.png',
        'Lost Treasures',
        'HTML | CSS | JavaScript',
        'Jump, run and throw game based on object-oriented approach. Help Bill "Dirty Sock" to get back the treasure that was stolen from him '),
      new ProjectsComponent('https://ring-of-fire-2b852.web.app',
        'https://github.com/ihortsar/ringOfFire',
        'ringOfFire.png',
        'Ring of fire',
        'HTML | CSS | JavaScript',
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.')
    ]

  }
  ngOnInit(): void {
    this.isMobileDevice = this.isMobile()
  }

  isMobile() {
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    return isMobile || isTablet

  }
}
