/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewsV4Component } from './news-v4.component';

describe('NewsV4Component', () => {
  let component: NewsV4Component;
  let fixture: ComponentFixture<NewsV4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsV4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
