import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOffCanvasComponent } from './mobile-off-canvas.component';

describe('MobileOffCanvasComponent', () => {
  let component: MobileOffCanvasComponent;
  let fixture: ComponentFixture<MobileOffCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileOffCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOffCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
