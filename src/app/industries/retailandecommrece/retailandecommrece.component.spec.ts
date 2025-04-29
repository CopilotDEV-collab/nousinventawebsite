import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailandecommreceComponent } from './retailandecommrece.component';

describe('RetailandecommreceComponent', () => {
  let component: RetailandecommreceComponent;
  let fixture: ComponentFixture<RetailandecommreceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetailandecommreceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailandecommreceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
