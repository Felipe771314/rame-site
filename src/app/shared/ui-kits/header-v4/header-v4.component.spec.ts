/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderV4Component } from './header-v4.component';

describe('HeaderV4Component', () => {
  let component: HeaderV4Component;
  let fixture: ComponentFixture<HeaderV4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderV4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
