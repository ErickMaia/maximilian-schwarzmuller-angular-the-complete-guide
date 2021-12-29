import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingTimeOutComponent } from './testing-time-out.component';

describe('TestingTimeOutComponent', () => {
  let component: TestingTimeOutComponent;
  let fixture: ComponentFixture<TestingTimeOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingTimeOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingTimeOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
