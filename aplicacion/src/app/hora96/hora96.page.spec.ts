import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hora96Page } from './hora96.page';

describe('Hora96Page', () => {
  let component: Hora96Page;
  let fixture: ComponentFixture<Hora96Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hora96Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hora96Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
