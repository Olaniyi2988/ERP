import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileCardComponent } from '../profile-card/profile-card.component';

@Component({
  selector: 'app-question-answer',
  standalone: true,
  imports: [CommonModule, ProfileCardComponent],
  templateUrl: './question-answer.component.html',
  styleUrl: './question-answer.component.scss'
})
export class QuestionAnswerComponent {

  profiles = [
    { img: 'assets/profile.jpg', name: 'Aribisala Abiola', position: 'QA Lead' },
  ];

}
