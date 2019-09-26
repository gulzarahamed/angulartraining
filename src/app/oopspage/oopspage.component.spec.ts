import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OopspageComponent } from './oopspage.component';

describe('OopspageComponent', () => {
  let component: OopspageComponent;
  let fixture: ComponentFixture<OopspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OopspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OopspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
