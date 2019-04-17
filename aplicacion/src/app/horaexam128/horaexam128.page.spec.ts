import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Horaexam128Page } from './horaexam128.page';

describe('Horaexam128Page', () => {
  let component: Horaexam128Page;
  let fixture: ComponentFixture<Horaexam128Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Horaexam128Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Horaexam128Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
