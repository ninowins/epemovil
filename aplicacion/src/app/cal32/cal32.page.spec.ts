import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cal32Page } from './cal32.page';

describe('Cal32Page', () => {
  let component: Cal32Page;
  let fixture: ComponentFixture<Cal32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cal32Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cal32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
