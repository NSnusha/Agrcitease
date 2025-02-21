import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfarmComponent } from './addfarm.component';

describe('AddfarmComponent', () => {
  let component: AddfarmComponent;
  let fixture: ComponentFixture<AddfarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
