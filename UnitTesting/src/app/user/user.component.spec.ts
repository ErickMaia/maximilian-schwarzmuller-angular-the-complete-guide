import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('use the user name from the service', () => {
    let userService = fixture.debugElement.injector.get(UserService)
    expect(userService.user.name).toEqual(component.user.name)
  })

  it("should display the user name if the user is logged in", () => {
    component.isLoggedIn = true
    let compiled = fixture.debugElement.nativeElement
    fixture.detectChanges()
    expect(compiled.querySelector('p').textContent).toContain(component.user.name)
  })

  it("should\n't display the user name if the user is not logged in", () => {
    component.isLoggedIn = false
    let compiled = fixture.debugElement.nativeElement
    fixture.detectChanges()
    expect(compiled.querySelector('p').textContent).not.toContain(component.user.name)
  })

  it('should\'nt fetch data successfully if not called asynchronously', 
  () => {
    let dataService = fixture.debugElement.injector.get(DataService)
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data')); 

      fixture.detectChanges()
      expect(component.data).toBe(undefined)
  })

  it('should fetch data successfully if called asynchronously', 
  async(() => {
    let dataService = fixture.debugElement.injector.get(DataService)
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data')); 

    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(component.data).toBe('Data')
    })
  }))

  // This one didn't work for me as it did in the course
  it('should fetch data successfully if called asynchronously', 
  fakeAsync(() => {
    let dataService = fixture.debugElement.injector.get(DataService)
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data')); 

    fixture.detectChanges()
    tick()
    expect(component.data).toBe('Data')
  }))



});
