import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
    //throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
   // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
   // throw new Error('Method not implemented.');
  }
}
