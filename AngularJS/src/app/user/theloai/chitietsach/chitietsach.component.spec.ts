import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietsachComponent } from './chitietsach.component';

describe('ChitietsachComponent', () => {
  let component: ChitietsachComponent;
  let fixture: ComponentFixture<ChitietsachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChitietsachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChitietsachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
