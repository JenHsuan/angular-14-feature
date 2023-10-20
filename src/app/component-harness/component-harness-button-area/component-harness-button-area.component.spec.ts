import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHarnessButtonAreaComponent } from './component-harness-button-area.component';

describe('ComponentHarnessButtonAreaComponent', () => {
  let component: ComponentHarnessButtonAreaComponent;
  let fixture: ComponentFixture<ComponentHarnessButtonAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ComponentHarnessButtonAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentHarnessButtonAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
