/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogoV3Component } from './logo-v3.component';

describe('LogoV3Component', () => {
  let component: LogoV3Component;
  let fixture: ComponentFixture<LogoV3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
