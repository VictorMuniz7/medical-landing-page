import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FtfAppointmentComponent } from './components/ftf-appointment/ftf-appointment.component';
import { OnlineAppointmentComponent } from './components/online-appointment/online-appointment.component';
import { ReschedulingComponent } from './components/rescheduling/rescheduling.component';
import { LocalizationComponent } from './components/localization/localization.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'ftfAppointment', component: FtfAppointmentComponent
  },
  {
    path: 'onlineAppointment', component: OnlineAppointmentComponent
  },
  {
    path: 'rescheduling', component: ReschedulingComponent
  },
  {
    path: 'localization', component: LocalizationComponent
  }
];
