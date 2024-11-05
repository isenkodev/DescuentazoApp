import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarUserPage } from './registrar-user.page';

describe('RegistrarUserPage', () => {
  let component: RegistrarUserPage;
  let fixture: ComponentFixture<RegistrarUserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
