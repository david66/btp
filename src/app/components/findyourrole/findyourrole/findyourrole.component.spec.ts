import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindyourroleComponent } from './findyourrole.component';

describe('FindyourroleComponent', () => {
  let component: FindyourroleComponent;
  let fixture: ComponentFixture<FindyourroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindyourroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindyourroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
