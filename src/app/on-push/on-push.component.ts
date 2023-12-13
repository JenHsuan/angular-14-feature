import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnPushChildComponent } from './on-push-child/on-push-child.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-on-push',
  standalone: true,
  imports: [CommonModule, OnPushChildComponent, FormsModule, ReactiveFormsModule, SectionContainerComponent],
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.scss']
})
export class OnPushComponent extends BaseComponent implements OnInit {
  messages = [
    "hello",
    "hi",
    "nice to meet you"
  ];

  message = "";
  

  code = `
  //1. Create parent component
  
  messages = [
    "hello",
    "hi",
    "nice to meet you"
  ];

  message = "";

  ngOnInit(): void {
    window.setInterval(() => {
      this.message = this.messages[Math.floor(Math.random() * this.messages.length)];
    }, 1000)
  }

  //2. Update parent's template
  
  <app-on-push-child [ngModel]="message"></app-on-push-child>

  //3. Create child component

  @Component({
    selector: 'app-on-push-child',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './on-push-child.component.html',
    styleUrls: ['./on-push-child.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: OnPushChildComponent,
        multi: true
      },
    ]
  })
  export class OnPushChildComponent implements ControlValueAccessor {
    index: string;
    writeValue(obj: any): void {
      this.index = obj;
    }
    registerOnChange(fn: any): void {
    }
    registerOnTouched(fn: any): void {
    }
    setDisabledState?(isDisabled: boolean): void {
    }
  }
  `;

  ngOnInit(): void {
    window.setInterval(() => {
      this.message = this.messages[Math.floor(Math.random() * this.messages.length)];
    }, 1000)
  }
}
