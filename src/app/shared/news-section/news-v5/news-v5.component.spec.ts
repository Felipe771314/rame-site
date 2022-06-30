/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewsV5Component } from './news-v5.component';

describe('NewsV5Component', () => {
  let component: NewsV5Component;
  let fixture: ComponentFixture<NewsV5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsV5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
