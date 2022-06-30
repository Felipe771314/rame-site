/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SingularClientComponent } from './singular-client.component';

describe('SingularClientComponent', () => {
  let component: SingularClientComponent;
  let fixture: ComponentFixture<SingularClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingularClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingularClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
