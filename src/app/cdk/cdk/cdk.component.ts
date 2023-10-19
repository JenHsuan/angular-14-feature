import { Component, OnInit } from '@angular/core';
import {Dialog, DIALOG_DATA} from '@angular/cdk/dialog';
import { CdkDialogComponent } from './cdk-dialog/cdk-dialog.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-cdk',
  templateUrl: './cdk.component.html',
  styleUrls: ['./cdk.component.scss']
})
export class CdkComponent {
  constructor(public dialog: Dialog) {}

  openDialog() {
    this.dialog.open(CdkDialogComponent, {
      minWidth: '300px',
      data: {
        animal: 'panda',
      },
    });
  }
}
