import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam32Page } from './exam32.page';

describe('Exam32Page', () => {
  let component: Exam32Page;
  let fixture: ComponentFixture<Exam32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exam32Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exam32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
