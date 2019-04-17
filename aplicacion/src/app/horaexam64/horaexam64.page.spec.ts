import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Horaexam64Page } from './horaexam64.page';

describe('Horaexam64Page', () => {
  let component: Horaexam64Page;
  let fixture: ComponentFixture<Horaexam64Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Horaexam64Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Horaexam64Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
