import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoClientesPageComponent } from './historico-clientes-page.component';

describe('HistoricoClientesPageComponent', () => {
  let component: HistoricoClientesPageComponent;
  let fixture: ComponentFixture<HistoricoClientesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricoClientesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoClientesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
