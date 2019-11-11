import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDeatilsComponent } from './movie-deatils.component';

describe('MovieDeatilsComponent', () => {
  let component: MovieDeatilsComponent;
  let fixture: ComponentFixture<MovieDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
