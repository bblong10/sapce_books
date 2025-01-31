import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemtheloaiComponent } from './themtheloai.component';

describe('ThemtheloaiComponent', () => {
  let component: ThemtheloaiComponent;
  let fixture: ComponentFixture<ThemtheloaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemtheloaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemtheloaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
