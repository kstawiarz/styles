import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxMainComponent } from './toolbox-main.component';

describe('ToolkitMainComponent', () => {
  let component: ToolboxMainComponent;
  let fixture: ComponentFixture<ToolboxMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolboxMainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
