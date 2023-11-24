import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-cli',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.scss']
})
export class CliComponent extends BaseComponent {
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
