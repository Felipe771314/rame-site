/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtaV7Component } from './cta-v7.component';

describe('CtaV7Component', () => {
  let component: CtaV7Component;
  let fixture: ComponentFixture<CtaV7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaV7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaV7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
