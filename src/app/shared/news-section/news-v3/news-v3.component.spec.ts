/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewsV3Component } from './news-v3.component';

describe('NewsV3Component', () => {
  let component: NewsV3Component;
  let fixture: ComponentFixture<NewsV3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
