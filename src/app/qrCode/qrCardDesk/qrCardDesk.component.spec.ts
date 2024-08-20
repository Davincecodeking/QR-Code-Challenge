/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QrCardDeskComponent } from './qrCardDesk.component';

describe('QrCardDeskComponent', () => {
  let component: QrCardDeskComponent;
  let fixture: ComponentFixture<QrCardDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrCardDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrCardDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
