/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContentV5Component } from './content-v5.component';

describe('ContentV5Component', () => {
  let component: ContentV5Component;
  let fixture: ComponentFixture<ContentV5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentV5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
