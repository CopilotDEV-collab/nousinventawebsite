import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankandfinanceComponent } from './bankandfinance.component';

describe('BankandfinanceComponent', () => {
  let component: BankandfinanceComponent;
  let fixture: ComponentFixture<BankandfinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankandfinanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankandfinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
