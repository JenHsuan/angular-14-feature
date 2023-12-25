import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';

@Component({
  selector: 'app-dev-tool',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './dev-tool.component.html',
  styleUrls: ['./dev-tool.component.scss']
})
export class DevToolComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.DEV_TOOL);
}
