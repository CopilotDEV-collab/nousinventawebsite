import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AidrivenautomationComponent } from './aidrivenautomation.component';

describe('AidrivenautomationComponent', () => {
  let component: AidrivenautomationComponent;
  let fixture: ComponentFixture<AidrivenautomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AidrivenautomationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AidrivenautomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
