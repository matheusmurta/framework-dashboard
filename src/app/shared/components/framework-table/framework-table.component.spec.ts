import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkTableComponent } from './framework-table.component';

describe('FrameworkTableComponent', () => {
  let component: FrameworkTableComponent;
  let fixture: ComponentFixture<FrameworkTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
