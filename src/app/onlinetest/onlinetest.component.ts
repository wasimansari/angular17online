import { Component } from '@angular/core';
import { RegistrationComponent } from "./registration/registration.component";

@Component({
  selector: 'app-onlinetest',
  standalone: true,
  imports: [RegistrationComponent],
  templateUrl: './onlinetest.component.html',
  styleUrl: './onlinetest.component.scss'
})
export class OnlinetestComponent {

}
