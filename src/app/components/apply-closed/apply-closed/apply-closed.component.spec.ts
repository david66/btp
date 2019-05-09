import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyClosedComponent } from './apply-closed.component';

describe('ConfirmationComponent', () => {
  let component: ApplyClosedComponent;
  let fixture: ComponentFixture<ApplyClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
