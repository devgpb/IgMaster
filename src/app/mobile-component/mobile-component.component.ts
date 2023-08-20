import { Component } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-mobile-component',
  templateUrl: './mobile-component.component.html',
  styleUrls: ['./mobile-component.component.scss']
})
export class MobileComponentComponent {
  faFacebook = faFacebookF
}
