import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Calexam128Page } from './calexam128.page';

describe('Calexam128Page', () => {
  let component: Calexam128Page;
  let fixture: ComponentFixture<Calexam128Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calexam128Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calexam128Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
