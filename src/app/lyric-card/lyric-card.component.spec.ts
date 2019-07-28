import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricCardComponent } from './lyric-card.component';

describe('LyricCardComponent', () => {
  let component: LyricCardComponent;
  let fixture: ComponentFixture<LyricCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
