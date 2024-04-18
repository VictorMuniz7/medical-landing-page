import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-rescheduling',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './rescheduling.component.html',
  styleUrl: './rescheduling.component.scss'
})
export class ReschedulingComponent {

}
