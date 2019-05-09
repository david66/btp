import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tokyo2020component } from './contact.component';

describe('ContactComponent', () => {
  let component: Tokyo2020component;
  let fixture: ComponentFixture<Tokyo2020component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tokyo2020component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tokyo2020component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
