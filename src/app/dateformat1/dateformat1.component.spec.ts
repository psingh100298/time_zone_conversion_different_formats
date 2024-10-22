import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dateformat1Component } from './dateformat1.component';

describe('Dateformat1Component', () => {
  let component: Dateformat1Component;
  let fixture: ComponentFixture<Dateformat1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dateformat1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dateformat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
