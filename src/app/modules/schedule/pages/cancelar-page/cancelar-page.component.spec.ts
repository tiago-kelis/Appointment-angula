import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarPageComponent } from './cancelar-page.component';

describe('CancelarPageComponent', () => {
  let component: CancelarPageComponent;
  let fixture: ComponentFixture<CancelarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancelarPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
