import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiproductdevComponent } from './aiproductdev.component';

describe('AiproductdevComponent', () => {
  let component: AiproductdevComponent;
  let fixture: ComponentFixture<AiproductdevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiproductdevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiproductdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
