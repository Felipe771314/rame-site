/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogoV2Component } from './logo-v2.component';

describe('LogoV2Component', () => {
  let component: LogoV2Component;
  let fixture: ComponentFixture<LogoV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
