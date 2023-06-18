import { TestBed } from '@angular/core/testing';

import { RecipeSelectedGuardService } from './recipe-selected-guard.service';

describe('RecipeSelectedGuardService', () => {
  let service: RecipeSelectedGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeSelectedGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
