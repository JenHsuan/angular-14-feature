import { Component, OnInit } from '@angular/core';
import {Dialog, DIALOG_DATA} from '@angular/cdk/dialog';
import { CdkDialogComponent } from './cdk-dialog/cdk-dialog.component';
import { BaseComponent } from 'src/app/base/base.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-cdk',
  templateUrl: './cdk.component.html',
  styleUrls: ['./cdk.component.scss']
})
export class CdkComponent extends BaseComponent {
  constructor(public dialog: Dialog) {
    super();
  }

  openDialog() {
    this.dialog.open(CdkDialogComponent, {
      minWidth: '300px',
      data: {
        animal: 'panda',
      },
    });
  }
}
