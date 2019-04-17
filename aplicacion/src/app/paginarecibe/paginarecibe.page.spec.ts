import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginarecibePage } from './paginarecibe.page';

describe('PaginarecibePage', () => {
  let component: PaginarecibePage;
  let fixture: ComponentFixture<PaginarecibePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginarecibePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginarecibePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
