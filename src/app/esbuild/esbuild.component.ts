import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-esbuild',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './esbuild.component.html',
  styleUrls: ['./esbuild.component.scss']
})
export class EsbuildComponent extends BaseComponent {
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
