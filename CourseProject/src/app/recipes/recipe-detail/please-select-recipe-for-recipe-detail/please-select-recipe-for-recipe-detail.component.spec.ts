import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseSelectRecipeForRecipeDetailComponent } from './please-select-recipe-for-recipe-detail.component';

describe('PleaseSelectRecipeForRecipeDetailComponent', () => {
  let component: PleaseSelectRecipeForRecipeDetailComponent;
  let fixture: ComponentFixture<PleaseSelectRecipeForRecipeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PleaseSelectRecipeForRecipeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PleaseSelectRecipeForRecipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
