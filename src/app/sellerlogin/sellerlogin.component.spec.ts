import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerloginComponent } from './sellerlogin.component';

describe('SellerloginComponent', () => {
  let component: SellerloginComponent;
  let fixture: ComponentFixture<SellerloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerloginComponent]
    });
    fixture = TestBed.createComponent(SellerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
