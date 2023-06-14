import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseSidebarLv2Component } from './collapse-sidebar-lv2.component';

describe('CollapseSidebarLv2Component', () => {
  let component: CollapseSidebarLv2Component;
  let fixture: ComponentFixture<CollapseSidebarLv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseSidebarLv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseSidebarLv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
