import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations: [
    trigger('staggerFadeIn', [
      transition(':enter', [
        query(
          '.project-card',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger(300, [
              animate(
                '0.8s ease-in-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ProjectsComponent {
  projects = [
    {
      name: '1.  Authorization Management System [Team Project – Jio Platforms] ',
      description: `I designed and implemented a robust system using Angular, NodeJS, and SAP database technologies to manage access controls across the organization. Streamlined personnel authorization workflows, reducing processing time by 30% and enhancing system security.`,
      technologies: `HTML · CSS · Bootstrap · JSON · Material UI · Angular · Typescript · Git · Azure · BugFixing · CI/CD · RESTful WebServices · Software Development Life Cycle (SDLC) · Scrum · Agile Methodologies`,
    },
    {
      name: '2. Sustainability First Services [Team Project – Jio Platforms]  ',
      description: `I designed intuitive user interfaces using Angular for a secure Authorization Management System. I optimized front-end performance, reducing average render times by 20%. I collaborated with backend developers to ensure smooth API integration and cross-functional teamwork.`,
      technologies: `HTML · CSS · Bootstrap · JSON · Material UI · Angular · Typescript · Git · BugFixing · CI/CD · RESTful WebServices · Scrum`,
    },
  ];
}
