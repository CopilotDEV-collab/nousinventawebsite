import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelandlogisticComponent } from './travelandlogistic.component';

describe('TravelandlogisticComponent', () => {
  let component: TravelandlogisticComponent;
  let fixture: ComponentFixture<TravelandlogisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelandlogisticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelandlogisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
