import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dateformat3Component } from './dateformat3.component';

describe('Dateformat3Component', () => {
  let component: Dateformat3Component;
  let fixture: ComponentFixture<Dateformat3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dateformat3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dateformat3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
