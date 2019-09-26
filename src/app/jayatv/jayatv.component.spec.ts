import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JayatvComponent } from './jayatv.component';

describe('JayatvComponent', () => {
  let component: JayatvComponent;
  let fixture: ComponentFixture<JayatvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JayatvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JayatvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
