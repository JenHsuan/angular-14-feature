import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHarnessComponent } from './component-harness.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentAreaHarness } from './testing/component-harness';

describe('ComponentHarnessComponent', () => {
  let component: ComponentHarnessComponent;
  let fixture: ComponentFixture<ComponentHarnessComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ComponentHarnessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentHarnessComponent);
    component = fixture.componentInstance;

    //create loader
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a buttons-area component', async () => {
    const buttonsArea = await loader.getAllHarnesses(ComponentAreaHarness);
    expect(buttonsArea.length).toBe(1);
  });

  it('should call #getAction of component', async () => {
    spyOn(component, 'getAction');
    const buttonsArea = await loader.getHarness(ComponentAreaHarness);
    await buttonsArea.selectActionAndClickButton('Save');
    expect(component.getAction).toHaveBeenCalledWith('Save');
  });
});
