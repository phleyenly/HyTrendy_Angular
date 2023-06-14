import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseSidebarComponent } from './collapse-sidebar.component';

describe('CollapseSidebarComponent', () => {
  let component: CollapseSidebarComponent;
  let fixture: ComponentFixture<CollapseSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
