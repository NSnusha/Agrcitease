import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFarmComponent } from './single-farm.component';

describe('SingleFarmComponent', () => {
  let component: SingleFarmComponent;
  let fixture: ComponentFixture<SingleFarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
