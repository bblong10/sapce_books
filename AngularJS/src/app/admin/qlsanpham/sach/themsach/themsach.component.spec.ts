import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemsachComponent } from './themsach.component';

describe('ThemsachComponent', () => {
  let component: ThemsachComponent;
  let fixture: ComponentFixture<ThemsachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemsachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemsachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
