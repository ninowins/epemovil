import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Calnotaf64Page } from './calnotaf64.page';

describe('Calnotaf64Page', () => {
  let component: Calnotaf64Page;
  let fixture: ComponentFixture<Calnotaf64Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calnotaf64Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calnotaf64Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
