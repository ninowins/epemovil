import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Horaexam96Page } from './horaexam96.page';

describe('Horaexam96Page', () => {
  let component: Horaexam96Page;
  let fixture: ComponentFixture<Horaexam96Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Horaexam96Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Horaexam96Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
