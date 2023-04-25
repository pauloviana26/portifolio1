import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscolaridadePage } from './escolaridade.page';

describe('EscolaridadePage', () => {
  let component: EscolaridadePage;
  let fixture: ComponentFixture<EscolaridadePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscolaridadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
