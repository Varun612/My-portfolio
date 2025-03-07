import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  style,
  transition,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-hero',
  imports: [
    CommonModule,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ExperienceComponent,
  ],
  standalone: true,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 })),
      ]),
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate(
          '0.8s ease-out',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
    ]),
    trigger('staggeredFadeIn', [
      transition(':enter', [
        query(
          '.hero-item',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger(500, [
              animate(
                '0.8s ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true })
      ])
    ])
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  name = 'Varun Kandhari';
  title = 'Frontend Developer | Angular Expert';
  summary =
    'Passionate about building modern, user-friendly web applications using Angular and frontend technologies.';
  resumeLink =
    'https://drive.google.com/uc?id=1x8SKJzk7TtEENyaumjPZvT1UaDQ1zL6a';
}
