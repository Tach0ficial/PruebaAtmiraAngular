import { TestBed } from '@angular/core/testing';

import { NasaService } from './nasa.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { NasaApodResponse } from '../interfaces/nasaApodResponse.interface';

describe('NasaService', () => {
  let service: NasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ]
    });
    service = TestBed.inject(NasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of 6 pictures', (done: DoneFn) => {
    service.getLastSixAPOD().subscribe({
      next: (res) => {
        expect(res.length).toEqual(6);
        done();
      }
    });
  });

  it('should return a picture for a given date', (done: DoneFn) => {
    service.getAPODByDate('2022-04-18').subscribe({
      next: (apod: NasaApodResponse) => {
        expect(apod.media_type).toEqual('image');
        done();
      }
    });
  });

  it('should return an error if the date is not valid', (done: DoneFn) => {
    service.getAPODByDate('2022-04-33').subscribe({
      error: ({status}) => {
        expect(status).toEqual(400);
        done();
      }
    });
  });

});
