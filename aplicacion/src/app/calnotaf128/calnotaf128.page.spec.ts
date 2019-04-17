import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Calnotaf128Page } from './calnotaf128.page';

describe('Calnotaf128Page', () => {
  let component: Calnotaf128Page;
  let fixture: ComponentFixture<Calnotaf128Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calnotaf128Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calnotaf128Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
