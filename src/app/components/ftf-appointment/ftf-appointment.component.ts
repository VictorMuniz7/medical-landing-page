import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-ftf-appointment',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './ftf-appointment.component.html',
  styleUrl: './ftf-appointment.component.scss'
})
export class FtfAppointmentComponent {

}
