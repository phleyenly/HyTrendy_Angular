import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMutiModuleComponent } from './select-muti-module.component';

describe('SelectMutiModuleComponent', () => {
  let component: SelectMutiModuleComponent;
  let fixture: ComponentFixture<SelectMutiModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMutiModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectMutiModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
