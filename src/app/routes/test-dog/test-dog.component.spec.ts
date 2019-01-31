import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDogComponent } from './test-dog.component';

describe('TestDogComponent', () => {
  let component: TestDogComponent;
  let fixture: ComponentFixture<TestDogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
