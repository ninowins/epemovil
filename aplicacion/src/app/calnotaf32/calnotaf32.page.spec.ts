import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Calnotaf32Page } from './calnotaf32.page';

describe('Calnotaf32Page', () => {
  let component: Calnotaf32Page;
  let fixture: ComponentFixture<Calnotaf32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calnotaf32Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calnotaf32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
