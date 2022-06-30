/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtaV3Component } from './cta-v3.component';

describe('CtaV3Component', () => {
  let component: CtaV3Component;
  let fixture: ComponentFixture<CtaV3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
