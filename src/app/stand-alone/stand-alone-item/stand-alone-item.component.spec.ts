import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandAloneItemComponent } from './stand-alone-item.component';

describe('StandAloneItemComponent', () => {
  let component: StandAloneItemComponent;
  let fixture: ComponentFixture<StandAloneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StandAloneItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandAloneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
