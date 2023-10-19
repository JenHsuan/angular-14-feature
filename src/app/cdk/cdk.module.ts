import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkRoutingModule } from './cdk-routing.module';
import { CdkComponent } from './cdk/cdk.component';
import { CdkMenuComponent } from './cdk/cdk-menu/cdk-menu.component';
import { CdkDialogComponent } from './cdk/cdk-dialog/cdk-dialog.component';
import {CdkMenuModule} from '@angular/cdk/menu';
import {DialogModule} from '@angular/cdk/dialog';



@NgModule({
  declarations: [
    CdkComponent,
    CdkMenuComponent,
    CdkDialogComponent
  ],
  imports: [
    CommonModule,
    CdkRoutingModule,
    CdkMenuModule,
    DialogModule
  ]
})
export class CdkModule { }
