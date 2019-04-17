import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam128Page } from './exam128.page';

describe('Exam128Page', () => {
  let component: Exam128Page;
  let fixture: ComponentFixture<Exam128Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exam128Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exam128Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
