import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent {
  isContentOpen: boolean = true;

  get titleClassName() {
    return this.isContentOpen ? 'section-icon' : 'section-icon close';
  }

  get titleSectionClassName() {
    return this.isContentOpen ? 'title-section' : 'title-section close';
  }

  toggleContentOpen() {
    this.isContentOpen = !this.isContentOpen;
  }
}
