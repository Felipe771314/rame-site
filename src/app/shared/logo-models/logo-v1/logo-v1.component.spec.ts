/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogoV1Component } from './logo-v1.component';

describe('LogoV1Component', () => {
  let component: LogoV1Component;
  let fixture: ComponentFixture<LogoV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
