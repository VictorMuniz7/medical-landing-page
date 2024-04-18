import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-online-appointment',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './online-appointment.component.html',
  styleUrl: './online-appointment.component.scss'
})
export class OnlineAppointmentComponent {

}
