import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginconsumerComponent } from './loginconsumer.component';

describe('LoginconsumerComponent', () => {
  let component: LoginconsumerComponent;
  let fixture: ComponentFixture<LoginconsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginconsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginconsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
