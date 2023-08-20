import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileComponentComponent } from './mobile-component.component';

describe('MobileComponentComponent', () => {
  let component: MobileComponentComponent;
  let fixture: ComponentFixture<MobileComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileComponentComponent]
    });
    fixture = TestBed.createComponent(MobileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
