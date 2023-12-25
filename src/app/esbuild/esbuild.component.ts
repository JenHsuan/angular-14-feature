import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';
import { HighlightModule } from 'ngx-highlightjs';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';

@Component({
  selector: 'app-esbuild',
  standalone: true,
  imports: [CommonModule, HighlightModule, SectionContainerComponent],
  templateUrl: './esbuild.component.html',
  styleUrls: ['./esbuild.component.scss']
})
export class EsbuildComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.ESBUILD);
  steps = `
  //1. Update the angular.json file
  "architect": {
    "build": {
      "builder": "@angular-devkit/build-angular:browser-esbuild",
      ...
    }
  }
  
  //2. Build the project
  ng build`;
}
