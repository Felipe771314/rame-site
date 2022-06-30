/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtaV12Component } from './cta-v12.component';

describe('CtaV12Component', () => {
  let component: CtaV12Component;
  let fixture: ComponentFixture<CtaV12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaV12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaV12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
