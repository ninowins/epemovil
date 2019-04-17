import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam96Page } from './exam96.page';

describe('Exam96Page', () => {
  let component: Exam96Page;
  let fixture: ComponentFixture<Exam96Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exam96Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exam96Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
