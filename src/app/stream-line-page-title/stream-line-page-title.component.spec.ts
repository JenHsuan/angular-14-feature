import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamLinePageTitleComponent } from './stream-line-page-title.component';

describe('StreamLinePageTitleComponent', () => {
  let component: StreamLinePageTitleComponent;
  let fixture: ComponentFixture<StreamLinePageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StreamLinePageTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamLinePageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
