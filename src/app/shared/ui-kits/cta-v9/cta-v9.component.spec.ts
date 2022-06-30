/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtaV9Component } from './cta-v9.component';

describe('CtaV9Component', () => {
  let component: CtaV9Component;
  let fixture: ComponentFixture<CtaV9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaV9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaV9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
