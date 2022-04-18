import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [HttpClientModule,
      RouterTestingModule]    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isLoading should be false', () => {
    expect(component.isLoading).toBeTrue();
  });

  it('lastSixAPOD should be empty', () => {
    expect(component.lastSixAPOD).toHaveSize(0);
  });

  it('The loading element should be visible', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-loading-logo')).not.toBeNull();
  });

  it('The loading element should be hidden', () => {
    component.isLoading = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-loading-logo')).toBeNull();
  });

  // it('The list of APOD should be contain 6 elements', () => {
  //   component.isLoading = false;
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelectorAll('app-picture-card').length).toBe(6);
  // } );
  

});
