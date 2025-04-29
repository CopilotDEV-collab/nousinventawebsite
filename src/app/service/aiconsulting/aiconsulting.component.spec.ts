import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiconsultingComponent } from './aiconsulting.component';

describe('AiconsultingComponent', () => {
  let component: AiconsultingComponent;
  let fixture: ComponentFixture<AiconsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiconsultingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiconsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
