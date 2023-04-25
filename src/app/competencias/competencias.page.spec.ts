import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompetenciasPage } from './competencias.page';

describe('CompetenciasPage', () => {
  let component: CompetenciasPage;
  let fixture: ComponentFixture<CompetenciasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CompetenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
