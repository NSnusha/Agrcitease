import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropstataticsComponent } from './cropstatatics.component';

describe('CropstataticsComponent', () => {
  let component: CropstataticsComponent;
  let fixture: ComponentFixture<CropstataticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropstataticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropstataticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
