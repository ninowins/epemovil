import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Calexam32Page } from './calexam32.page';

describe('Calexam32Page', () => {
  let component: Calexam32Page;
  let fixture: ComponentFixture<Calexam32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calexam32Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calexam32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
