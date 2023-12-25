import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-cli',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.scss']
})
export class CliComponent extends BaseComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.CLI);
  cacheInstruction = `
  ng cache enable/on
  ng cache disable/off
  ng cache clean
  ng cache info`;

  analyticsInstruction = `
  ng analytics enable/on (-g)
  ng analytics disable/off (-g)
  ng analytics clean
  ng analytics prompt (-g)`;
}
