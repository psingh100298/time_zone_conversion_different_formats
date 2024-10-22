import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dateformat5Component } from './dateformat5.component';

describe('Dateformat5Component', () => {
  let component: Dateformat5Component;
  let fixture: ComponentFixture<Dateformat5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dateformat5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dateformat5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
