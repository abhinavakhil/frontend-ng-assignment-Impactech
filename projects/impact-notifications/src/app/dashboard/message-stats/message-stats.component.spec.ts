import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageStatsComponent } from './message-stats.component';

describe('MessageStatsComponent', () => {
  let component: MessageStatsComponent;
  let fixture: ComponentFixture<MessageStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
