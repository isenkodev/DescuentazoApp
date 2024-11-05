import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestablecerPassPage } from './restablecer-pass.page';

describe('RestablecerPassPage', () => {
  let component: RestablecerPassPage;
  let fixture: ComponentFixture<RestablecerPassPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestablecerPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
