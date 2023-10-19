import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkMenuComponent } from './cdk-menu.component';

describe('CdkMenuComponent', () => {
  let component: CdkMenuComponent;
  let fixture: ComponentFixture<CdkMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
