import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dateformat2Component } from './dateformat2.component';

describe('Dateformat2Component', () => {
  let component: Dateformat2Component;
  let fixture: ComponentFixture<Dateformat2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dateformat2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dateformat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
