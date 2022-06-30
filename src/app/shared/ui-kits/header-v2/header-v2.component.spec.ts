/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderV2Component } from './header-v2.component';

describe('HeaderV2Component', () => {
  let component: HeaderV2Component;
  let fixture: ComponentFixture<HeaderV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
