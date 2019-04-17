import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hora128Page } from './hora128.page';

describe('Hora128Page', () => {
  let component: Hora128Page;
  let fixture: ComponentFixture<Hora128Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hora128Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hora128Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
