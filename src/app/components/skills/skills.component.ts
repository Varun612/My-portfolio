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
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  animations: [
    trigger('staggerFadeIn', [
      transition(':enter', [
        query(
          '.skill-card',
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
export class SkillsComponent {
  skills = [
    { name: 'HTML', level: 90, icon: '🌐' },
    { name: 'CSS', level: 90, icon: '🎨' },
    { name: 'JavaScript', level: 80, icon: '⚡' },
    { name: 'TypeScript', level: 90, icon: '🔷' },
    { name: 'Angular', level: 90, icon: 'code' },
    { name: 'Bootstrap', level: 80, icon: '📱' },
    { name: 'Node.js', level: 70, icon: '🌱' },
    { name: 'MongoDB', level: 70, icon: '🍃' },
    { name: 'Git', level: 90, icon: '🔧' },
    { name: 'REST APIs', level: 90, icon: '📡' },
  ];
}
