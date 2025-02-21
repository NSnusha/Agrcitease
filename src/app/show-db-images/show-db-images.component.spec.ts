import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDbImagesComponent } from './show-db-images.component';

describe('ShowDbImagesComponent', () => {
  let component: ShowDbImagesComponent;
  let fixture: ComponentFixture<ShowDbImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDbImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDbImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
