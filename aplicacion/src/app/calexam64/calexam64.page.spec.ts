import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Calexam64Page } from './calexam64.page';

describe('Calexam64Page', () => {
  let component: Calexam64Page;
  let fixture: ComponentFixture<Calexam64Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calexam64Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calexam64Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
