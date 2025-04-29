import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AipageComponent } from './aipage.component';

describe('AipageComponent', () => {
  let component: AipageComponent;
  let fixture: ComponentFixture<AipageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AipageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AipageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
