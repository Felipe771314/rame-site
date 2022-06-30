/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtaV4Component } from './cta-v4.component';

describe('CtaV4Component', () => {
  let component: CtaV4Component;
  let fixture: ComponentFixture<CtaV4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaV4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
