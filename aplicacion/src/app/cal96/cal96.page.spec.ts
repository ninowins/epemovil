import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cal96Page } from './cal96.page';

describe('Cal96Page', () => {
  let component: Cal96Page;
  let fixture: ComponentFixture<Cal96Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cal96Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cal96Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
