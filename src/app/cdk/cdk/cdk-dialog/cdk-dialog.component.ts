import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { DialogData } from '../cdk.component';

@Component({
  selector: 'app-cdk-dialog',
  templateUrl: './cdk-dialog.component.html',
  styleUrls: ['./cdk-dialog.component.scss']
})
export class CdkDialogComponent {
  constructor(@Inject(DIALOG_DATA) public data: DialogData) {}
}
