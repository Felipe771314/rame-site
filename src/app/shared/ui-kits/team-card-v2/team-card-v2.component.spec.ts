/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeamCardV2Component } from './team-card-v2.component';

describe('TeamCardV2Component', () => {
  let component: TeamCardV2Component;
  let fixture: ComponentFixture<TeamCardV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamCardV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCardV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
