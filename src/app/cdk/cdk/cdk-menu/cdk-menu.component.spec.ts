import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { CdkMenuComponent } from './cdk-menu.component';

describe('CdkMenuComponent', () => {
  let component: CdkMenuComponent;
  let fixture: ComponentFixture<CdkMenuComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkMenuComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
