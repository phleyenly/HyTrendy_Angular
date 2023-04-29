import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownAdminComponent } from './dropdown-admin.component';

describe('DropdownAdminComponent', () => {
  let component: DropdownAdminComponent;
  let fixture: ComponentFixture<DropdownAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
