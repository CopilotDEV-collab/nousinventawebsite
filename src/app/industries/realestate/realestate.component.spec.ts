import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateComponent } from './realestate.component';

describe('ManufacturingComponent', () => {
  let component: RealEstateComponent;
  let fixture: ComponentFixture<RealEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
