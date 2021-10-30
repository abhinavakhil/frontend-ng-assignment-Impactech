import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentUserComponent } from './frequent-user.component';

describe('FrequentUserComponent', () => {
  let component: FrequentUserComponent;
  let fixture: ComponentFixture<FrequentUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
