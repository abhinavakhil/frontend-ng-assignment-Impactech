import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestFeedComponent } from './latest-feed.component';

describe('LatestFeedComponent', () => {
  let component: LatestFeedComponent;
  let fixture: ComponentFixture<LatestFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
