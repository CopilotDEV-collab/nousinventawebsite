import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdcallerComponent } from './coldcaller.component';

describe('ColdcallerComponent', () => {
  let component: ColdcallerComponent;
  let fixture: ComponentFixture<ColdcallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColdcallerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColdcallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
