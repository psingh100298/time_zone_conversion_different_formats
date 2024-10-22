import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dateformat4Component } from './dateformat4.component';

describe('Dateformat4Component', () => {
  let component: Dateformat4Component;
  let fixture: ComponentFixture<Dateformat4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dateformat4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dateformat4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
