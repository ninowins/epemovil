import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Calnotaf96Page } from './calnotaf96.page';

describe('Calnotaf96Page', () => {
  let component: Calnotaf96Page;
  let fixture: ComponentFixture<Calnotaf96Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calnotaf96Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calnotaf96Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
