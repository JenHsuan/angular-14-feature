import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-component-harness-button-area',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatSelectModule, FormsModule, BrowserAnimationsModule],
  templateUrl: './component-harness-button-area.component.html',
  styleUrls: ['./component-harness-button-area.component.scss']
})
export class ComponentHarnessButtonAreaComponent {
  @Input() actions = ['Save', 'Exit'];
  @Input() isDisabled = false;
  @Output() actionSelected = new EventEmitter<string>();
  selectedAction: '';

  triggerAction() {
    this.actionSelected.emit(this.selectedAction);
  }
}
