import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaprodPage } from './vistaprod.page';

describe('VistaprodPage', () => {
  let component: VistaprodPage;
  let fixture: ComponentFixture<VistaprodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaprodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
