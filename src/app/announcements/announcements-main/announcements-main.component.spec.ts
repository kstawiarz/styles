import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsMainComponent } from './announcements-main.component';

describe('AdsMainComponent', () => {
  let component: AnnouncementsMainComponent;
  let fixture: ComponentFixture<AnnouncementsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementsMainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
