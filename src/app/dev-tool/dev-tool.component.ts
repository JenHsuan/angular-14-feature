import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-dev-tool',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dev-tool.component.html',
  styleUrls: ['./dev-tool.component.scss']
})
export class DevToolComponent extends BaseComponent {

}
