import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginrepresentativeComponent } from './loginrepresentative.component';

describe('LoginrepresentativeComponent', () => {
  let component: LoginrepresentativeComponent;
  let fixture: ComponentFixture<LoginrepresentativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginrepresentativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginrepresentativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
