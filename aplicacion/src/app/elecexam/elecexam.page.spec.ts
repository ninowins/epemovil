import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecexamPage } from './elecexam.page';

describe('ElecexamPage', () => {
  let component: ElecexamPage;
  let fixture: ComponentFixture<ElecexamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecexamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecexamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
