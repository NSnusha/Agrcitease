import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerViewProfileComponent } from './farmer-view-profile.component';

describe('FarmerViewProfileComponent', () => {
  let component: FarmerViewProfileComponent;
  let fixture: ComponentFixture<FarmerViewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerViewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
