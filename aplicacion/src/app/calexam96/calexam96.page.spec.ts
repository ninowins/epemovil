import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Calexam96Page } from './calexam96.page';

describe('Calexam96Page', () => {
  let component: Calexam96Page;
  let fixture: ComponentFixture<Calexam96Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calexam96Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calexam96Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
