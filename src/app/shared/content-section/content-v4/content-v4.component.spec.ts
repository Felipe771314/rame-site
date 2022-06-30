/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContentV4Component } from './content-v4.component';

describe('ContentV4Component', () => {
  let component: ContentV4Component;
  let fixture: ComponentFixture<ContentV4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentV4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
