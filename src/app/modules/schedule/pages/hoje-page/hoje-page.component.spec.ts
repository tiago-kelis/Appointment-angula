import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HojePageComponent } from './hoje-page.component';

describe('HojePageComponent', () => {
  let component: HojePageComponent;
  let fixture: ComponentFixture<HojePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HojePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HojePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
