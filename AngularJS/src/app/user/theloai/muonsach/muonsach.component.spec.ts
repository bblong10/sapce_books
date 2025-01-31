import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuonsachComponent } from './muonsach.component';

describe('MuonsachComponent', () => {
  let component: MuonsachComponent;
  let fixture: ComponentFixture<MuonsachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MuonsachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuonsachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
