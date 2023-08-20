import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopComponentComponent } from './desktop-component.component';

describe('DesktopComponentComponent', () => {
  let component: DesktopComponentComponent;
  let fixture: ComponentFixture<DesktopComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesktopComponentComponent]
    });
    fixture = TestBed.createComponent(DesktopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
