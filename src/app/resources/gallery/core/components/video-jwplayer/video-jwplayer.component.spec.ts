import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoJwplayerComponent } from './video-jwplayer.component';

describe('VideoJwplayerComponent', () => {
  let component: VideoJwplayerComponent;
  let fixture: ComponentFixture<VideoJwplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoJwplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoJwplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
