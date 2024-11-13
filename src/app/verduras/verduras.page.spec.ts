import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerdurasPage } from './verduras.page';

describe('VerdurasPage', () => {
  let component: VerdurasPage;
  let fixture: ComponentFixture<VerdurasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerdurasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
