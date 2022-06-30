/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogoV4Component } from './logo-v4.component';

describe('LogoV4Component', () => {
  let component: LogoV4Component;
  let fixture: ComponentFixture<LogoV4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoV4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
