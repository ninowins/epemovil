import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cal128Page } from './cal128.page';

describe('Cal128Page', () => {
  let component: Cal128Page;
  let fixture: ComponentFixture<Cal128Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cal128Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cal128Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
