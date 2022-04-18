import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NasaApodResponse } from '../../interfaces/nasaApodResponse.interface';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailComponent ],
      imports: [HttpClientModule, RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isLoading should be false', () => {
    expect(component.isLoading).toBeTrue();
  });

  it('APOD should be empty', () => {
    const apodMock:NasaApodResponse = {
      date: component.apod.date,          
      explanation: '',
      title: '',           
      url: ''
    };
    
    expect(component.apod).toEqual(apodMock);
  });

  it('The loading element should be visible', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-loading-logo')).not.toBeNull();
  });

  it('The loading element should be hidden', () => {
    component.isLoading = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-loading-logo')).toBeNull();
  });
});
