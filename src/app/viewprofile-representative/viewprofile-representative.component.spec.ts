import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprofileRepresentativeComponent } from './viewprofile-representative.component';

describe('ViewprofileRepresentativeComponent', () => {
  let component: ViewprofileRepresentativeComponent;
  let fixture: ComponentFixture<ViewprofileRepresentativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprofileRepresentativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprofileRepresentativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
