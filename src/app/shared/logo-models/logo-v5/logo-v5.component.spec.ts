/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogoV5Component } from './logo-v5.component';

describe('LogoV5Component', () => {
  let component: LogoV5Component;
  let fixture: ComponentFixture<LogoV5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoV5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
