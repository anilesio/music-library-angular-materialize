import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayHomeComponent } from './play-home.component';

describe('PlayHomeComponent', () => {
  let component: PlayHomeComponent;
  let fixture: ComponentFixture<PlayHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
