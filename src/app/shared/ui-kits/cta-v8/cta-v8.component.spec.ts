/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtaV8Component } from './cta-v8.component';

describe('CtaV8Component', () => {
  let component: CtaV8Component;
  let fixture: ComponentFixture<CtaV8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaV8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaV8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
