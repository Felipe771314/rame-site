/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtaV1Component } from './cta-v1.component';

describe('CtaV1Component', () => {
  let component: CtaV1Component;
  let fixture: ComponentFixture<CtaV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
