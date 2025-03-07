import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  animations: [
    trigger('staggeredExperience', [
      transition(':enter', [
        query('.exp-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(300, [
            animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true }),
      ]),
    ]),
  ],
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Jio Platforms',
      location: 'Navi Mumbai',
      role: 'Software Developer (Assistant Manager)',
      duration: '2022 - 2023',
      description: `Design to Code Conversion: Translated Adobe XD designs into fully functional, responsive frontend web pages. 
      Angular Development: Leveraged Context API and Angular for state management in Angular applications. 
      UI Development: Created responsive and visually appealing pages using Material UI and Bootstrap 5. 
      API Integrations: Integrated various APIs for seamless data exchange and functionality. 
      Filter Creation: Developed various filters to enhance data sorting and user experience. 
      Production Issue Resolution: Resolved critical production issues to maintain system stability and performance.`,
    },
    {
      company: 'Accenture',
      location: 'Bangalore',
      role: 'Application Development Associate',
      duration: '2021 - 2022',
      description: `As a Trainee Frontend Developer, I built responsive and interactive web applications using HTML, CSS, TypeScript, and Angular. I collaborated with designers, integrated REST APIs, optimized performance, ensured cross-browser compatibility, and followed best practices in frontend development.`,
    },
  ];
}
