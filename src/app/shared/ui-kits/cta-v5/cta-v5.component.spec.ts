/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtaV5Component } from './cta-v5.component';

describe('CtaV5Component', () => {
  let component: CtaV5Component;
  let fixture: ComponentFixture<CtaV5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaV5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
