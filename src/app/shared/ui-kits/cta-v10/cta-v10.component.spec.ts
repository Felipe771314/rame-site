/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtaV10Component } from './cta-v10.component';

describe('CtaV10Component', () => {
  let component: CtaV10Component;
  let fixture: ComponentFixture<CtaV10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaV10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaV10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
