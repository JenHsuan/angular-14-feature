import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentHarnessButtonAreaComponent } from './component-harness-button-area/component-harness-button-area.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';

@Component({
  selector: 'app-component-harness',
  standalone: true,
  imports: [CommonModule, ComponentHarnessButtonAreaComponent, BrowserAnimationsModule],
  templateUrl: './component-harness.component.html',
  styleUrls: ['./component-harness.component.scss']
})
export class ComponentHarnessComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.COMPONENT_HARNESS);
  action: string;
  getAction(action: string) {
    this.action = action;
    console.log(this.action)
  }
}
