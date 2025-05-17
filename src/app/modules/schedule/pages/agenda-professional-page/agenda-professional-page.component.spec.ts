import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaProfessionalPageComponent } from './agenda-professional-page.component';

describe('AgendaProfessionalPageComponent', () => {
  let component: AgendaProfessionalPageComponent;
  let fixture: ComponentFixture<AgendaProfessionalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendaProfessionalPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaProfessionalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
