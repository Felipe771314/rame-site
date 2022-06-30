/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtaV11Component } from './cta-v11.component';

describe('CtaV11Component', () => {
  let component: CtaV11Component;
  let fixture: ComponentFixture<CtaV11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaV11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaV11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
