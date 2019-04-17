import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecnoexamPage } from './elecnoexam.page';

describe('ElecnoexamPage', () => {
  let component: ElecnoexamPage;
  let fixture: ComponentFixture<ElecnoexamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecnoexamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecnoexamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
