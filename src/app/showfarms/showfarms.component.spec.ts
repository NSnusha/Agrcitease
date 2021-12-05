import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfarmsComponent } from './showfarms.component';

describe('ShowfarmsComponent', () => {
  let component: ShowfarmsComponent;
  let fixture: ComponentFixture<ShowfarmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowfarmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowfarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
