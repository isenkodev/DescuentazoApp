import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiambreriaPage } from './fiambreria.page';

describe('FiambreriaPage', () => {
  let component: FiambreriaPage;
  let fixture: ComponentFixture<FiambreriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FiambreriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
