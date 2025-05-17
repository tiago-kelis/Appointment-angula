import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarPageComponent } from './agendar-page.component';

describe('AgendarPageComponent', () => {
  let component: AgendarPageComponent;
  let fixture: ComponentFixture<AgendarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendarPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
