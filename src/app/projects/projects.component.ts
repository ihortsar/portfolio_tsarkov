import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() projectsLink
  @Input() projectsScreenshot
  @Input() projectsName: string;
  @Input() projectsLanguages: string;
  @Input() projectsDescription: string;
  @Input() gitLink: string;

  constructor(
    @Inject(String) projectsLink: string,
    @Inject(String) gitLink: string,
    @Inject(String) projectsScreenshot: string,
    @Inject(String) projectsName: string,
    @Inject(String) projectsLanguages: string,
    @Inject(String) projectsDescription: string) {

    this.gitLink = gitLink
    this.projectsLink = projectsLink
    this.projectsScreenshot = projectsScreenshot;
    this.projectsName = projectsName;
    this.projectsLanguages = projectsLanguages;
    this.projectsDescription = projectsDescription;
  }

}

