import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtfAppointmentComponent } from './ftf-appointment.component';

describe('FtfAppointmentComponent', () => {
  let component: FtfAppointmentComponent;
  let fixture: ComponentFixture<FtfAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FtfAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FtfAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
