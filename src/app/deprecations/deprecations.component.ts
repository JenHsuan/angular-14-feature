import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-deprecations',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './deprecations.component.html',
  styleUrls: ['./deprecations.component.scss']
})
export default class DeprecationsComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.DEPRECATIONS);
  escapeHtml = escapeHtml;
}
