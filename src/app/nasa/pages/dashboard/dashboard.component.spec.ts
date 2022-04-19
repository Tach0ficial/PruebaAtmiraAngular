import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NasaApodResponse } from '../../interfaces/nasaApodResponse.interface';

const mockAPODResponse: NasaApodResponse[] = [
  {
    date: new Date('2022-04-03'),
    explanation: 'This is the first APOD',
    title: 'APOD 1',
    url: 'https://apod.nasa.gov/apod/image/2204/CmbDipole_cobe_960.jpg',
  },
  {
    date: new Date('2022-04-04'),
    explanation: 'This is the second APOD',
    title: 'APOD 2',
    url: 'https://apod.nasa.gov/apod/image/2204/VortexAurora_Suarez_1080.jpg',
  },
  {
    date: new Date('2022-04-05'),
    explanation: 'This is the third APOD',
    title: 'APOD 3',
    url: 'https://apod.nasa.gov/apod/image/2204/Calif2Pleiades_Krcmarek_1080.jpg',
  },
  {
    date: new Date('2022-04-06'),
    explanation: 'This is the fourth APOD',
    title: 'APOD 4',
    url: 'https://apod.nasa.gov/apod/image/2204/LensedStar_Hubble_960.jpg',
  },
  {
    date: new Date('2022-04-07'),
    explanation: 'This is the fifth APOD',
    title: 'APOD 5',
    url: 'https://apod.nasa.gov/apod/image/2204/M24_APOD_GabrielRodriguesSantosAPOD1100.jpg',
  },
  {
    date: new Date('2022-04-08'),
    explanation: 'This is the sixth APOD',
    title: 'APOD 6',
    url: 'https://apod.nasa.gov/apod/image/2204/HaleBoppSeip_c1024.jpg',
  }
]

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

  it('The list of APOD should be contain 6 elements', () => {
    component.isLoading = false;
    component.lastSixAPOD = mockAPODResponse;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('app-picture-card').length).toBe(6);
  } );
  
});
