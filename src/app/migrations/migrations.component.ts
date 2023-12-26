import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { HighlightModule } from 'ngx-highlightjs';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';

@Component({
  selector: 'app-migrations',
  standalone: true,
  imports: [CommonModule, HighlightModule, SectionContainerComponent],
  templateUrl: './migrations.component.html',
  styleUrls: ['./migrations.component.scss']
})
export default class MigrationsComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.MIGRATIONS);

  instruction = `
  npx @angular/cli@14 new Angular14Project
  `;

  updateInstruction = `
  npx @angular/cli@14 update @angular/core@14 @angular/cli@14
  `;
}
