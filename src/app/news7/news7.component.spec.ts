import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News7Component } from './news7.component';

describe('News7Component', () => {
  let component: News7Component;
  let fixture: ComponentFixture<News7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
