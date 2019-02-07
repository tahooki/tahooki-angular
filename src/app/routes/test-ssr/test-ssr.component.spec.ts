import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSsrComponent } from './test-ssr.component';

describe('TestSsrComponent', () => {
  let component: TestSsrComponent;
  let fixture: ComponentFixture<TestSsrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSsrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
