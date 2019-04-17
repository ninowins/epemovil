import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam64Page } from './exam64.page';

describe('Exam64Page', () => {
  let component: Exam64Page;
  let fixture: ComponentFixture<Exam64Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exam64Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exam64Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
