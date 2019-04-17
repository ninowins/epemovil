import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hora64Page } from './hora64.page';

describe('Hora64Page', () => {
  let component: Hora64Page;
  let fixture: ComponentFixture<Hora64Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hora64Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hora64Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
