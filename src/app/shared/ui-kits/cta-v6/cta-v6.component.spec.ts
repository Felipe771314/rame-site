/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtaV6Component } from './cta-v6.component';

describe('CtaV6Component', () => {
  let component: CtaV6Component;
  let fixture: ComponentFixture<CtaV6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaV6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaV6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
