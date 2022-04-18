import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureCardComponent } from './picture-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PictureCardComponent', () => {
  let component: PictureCardComponent;
  let fixture: ComponentFixture<PictureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PictureCardComponent ],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
