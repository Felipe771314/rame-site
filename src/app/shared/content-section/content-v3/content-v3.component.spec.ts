/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContentV3Component } from './content-v3.component';

describe('ContentV3Component', () => {
  let component: ContentV3Component;
  let fixture: ComponentFixture<ContentV3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
