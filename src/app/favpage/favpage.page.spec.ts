import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavpagePage } from './favpage.page';

describe('FavpagePage', () => {
  let component: FavpagePage;
  let fixture: ComponentFixture<FavpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FavpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
