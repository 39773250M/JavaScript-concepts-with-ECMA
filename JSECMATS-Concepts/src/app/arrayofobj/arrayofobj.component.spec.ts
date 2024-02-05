import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayofobjComponent } from './arrayofobj.component';

describe('ArrayofobjComponent', () => {
  let component: ArrayofobjComponent;
  let fixture: ComponentFixture<ArrayofobjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayofobjComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrayofobjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
