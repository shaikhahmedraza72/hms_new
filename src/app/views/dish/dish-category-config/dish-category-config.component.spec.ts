import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCategoryConfigComponent } from './dish-category-config.component';

describe('DishCategoryConfigComponent', () => {
  let component: DishCategoryConfigComponent;
  let fixture: ComponentFixture<DishCategoryConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishCategoryConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishCategoryConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
