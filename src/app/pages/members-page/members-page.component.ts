import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarSmallComponent } from '../../components/navbar-small/navbar-small.component';
import { UserInterfaceComponent } from '../../components/user-interface/user-interface.component';
import { ManagementComponent } from '../../components/management/management.component';
import { QuestionAnswerComponent } from '../../components/question-answer/question-answer.component';
import { ProductDesignComponent } from '../../components/product-design/product-design.component';
import { SponsorComponent } from '../../components/sponsor/sponsor.component';

@Component({
  selector: 'app-members-page',
  standalone: true,
  imports: [
    CommonModule, 
    NavbarSmallComponent,
    UserInterfaceComponent,
    ManagementComponent,
    QuestionAnswerComponent,
    ProductDesignComponent,
    SponsorComponent
  ],
  templateUrl: './members-page.component.html',
  styleUrl: './members-page.component.scss'
})
export class MembersComponent {

}
