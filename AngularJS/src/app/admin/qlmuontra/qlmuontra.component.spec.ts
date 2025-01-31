import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlmuontraComponent } from './qlmuontra.component';

describe('QlmuontraComponent', () => {
  let component: QlmuontraComponent;
  let fixture: ComponentFixture<QlmuontraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QlmuontraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QlmuontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
