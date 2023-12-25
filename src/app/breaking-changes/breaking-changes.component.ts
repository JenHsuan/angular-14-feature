import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';

@Component({
  selector: 'app-breaking-changes',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './breaking-changes.component.html',
  styleUrls: ['./breaking-changes.component.scss']
})
export default class BreakingChangesComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.BREAKING_CHANGE);
  escapeHtml = escapeHtml;
}
