/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContentV6Component } from './content-v6.component';

describe('ContentV6Component', () => {
  let component: ContentV6Component;
  let fixture: ComponentFixture<ContentV6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentV6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentV6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
