/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContentV1Component } from './content-v1.component';

describe('ContentV1Component', () => {
  let component: ContentV1Component;
  let fixture: ComponentFixture<ContentV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
