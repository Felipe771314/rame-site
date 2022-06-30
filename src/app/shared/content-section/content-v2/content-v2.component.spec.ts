/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContentV2Component } from './content-v2.component';

describe('ContentV2Component', () => {
  let component: ContentV2Component;
  let fixture: ComponentFixture<ContentV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
