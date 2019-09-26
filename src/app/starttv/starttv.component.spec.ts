import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarttvComponent } from './starttv.component';

describe('StarttvComponent', () => {
  let component: StarttvComponent;
  let fixture: ComponentFixture<StarttvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarttvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarttvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
