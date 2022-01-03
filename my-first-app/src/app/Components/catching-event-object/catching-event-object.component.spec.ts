import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchingEventObjectComponent } from './catching-event-object.component';

describe('CatchingEventObjectComponent', () => {
  let component: CatchingEventObjectComponent;
  let fixture: ComponentFixture<CatchingEventObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchingEventObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchingEventObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
