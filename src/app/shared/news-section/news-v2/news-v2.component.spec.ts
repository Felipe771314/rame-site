/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewsV2Component } from './news-v2.component';

describe('NewsV2Component', () => {
  let component: NewsV2Component;
  let fixture: ComponentFixture<NewsV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
