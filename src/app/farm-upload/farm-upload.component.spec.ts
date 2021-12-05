import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmUploadComponent } from './farm-upload.component';

describe('FarmUploadComponent', () => {
  let component: FarmUploadComponent;
  let fixture: ComponentFixture<FarmUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
