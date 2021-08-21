import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSettingComponent } from './hotel-setting.component';

describe('HotelSettingComponent', () => {
  let component: HotelSettingComponent;
  let fixture: ComponentFixture<HotelSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
