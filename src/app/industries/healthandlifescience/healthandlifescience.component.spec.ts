import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthandlifescienceComponent } from './healthandlifescience.component';

describe('HealthandlifescienceComponent', () => {
  let component: HealthandlifescienceComponent;
  let fixture: ComponentFixture<HealthandlifescienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthandlifescienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthandlifescienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
