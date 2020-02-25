import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsMainComponent } from './departments-main.component';

describe('DepartmentsMainComponent', () => {
  let component: DepartmentsMainComponent;
  let fixture: ComponentFixture<DepartmentsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentsMainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
