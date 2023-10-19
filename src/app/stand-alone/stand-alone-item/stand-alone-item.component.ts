import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stand-alone-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stand-alone-item.component.html',
  styleUrls: ['./stand-alone-item.component.scss']
})
export class StandAloneItemComponent {
  @Input() index: number;
}
