import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseOrderComponent } from './collapse-order.component';

describe('CollapseOrderComponent', () => {
  let component: CollapseOrderComponent;
  let fixture: ComponentFixture<CollapseOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
