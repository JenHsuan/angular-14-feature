import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakingChangesComponent } from './breaking-changes.component';

describe('BreakingChangesComponent', () => {
  let component: BreakingChangesComponent;
  let fixture: ComponentFixture<BreakingChangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BreakingChangesComponent]
    });
    fixture = TestBed.createComponent(BreakingChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
