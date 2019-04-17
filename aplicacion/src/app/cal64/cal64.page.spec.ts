import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cal64Page } from './cal64.page';

describe('Cal64Page', () => {
  let component: Cal64Page;
  let fixture: ComponentFixture<Cal64Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cal64Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cal64Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
