import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartWrapComponent } from './cart-wrap.component';

describe('CartWrapComponent', () => {
  let component: CartWrapComponent;
  let fixture: ComponentFixture<CartWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
