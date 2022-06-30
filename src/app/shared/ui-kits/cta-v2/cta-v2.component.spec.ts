/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtaV2Component } from './cta-v2.component';

describe('CtaV2Component', () => {
  let component: CtaV2Component;
  let fixture: ComponentFixture<CtaV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
