import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDialogComponent } from './cdk-dialog.component';

describe('CdkDialogComponent', () => {
  let component: CdkDialogComponent;
  let fixture: ComponentFixture<CdkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
