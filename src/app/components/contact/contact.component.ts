import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [
    trigger('fadeInStagger', [
      transition(':enter', [
        query('.form-group', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  submitForm() {
    const mailtoLink = `mailto:varunkandhari612@gmail.com?subject=Contact from ${this.formData.name}%body=${this.formData.message}`;
    window.location.href = mailtoLink;
  }
}
