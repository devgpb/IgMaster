import { Component } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-desktop-component',
  templateUrl: './desktop-component.component.html',
  styleUrls: ['./desktop-component.component.scss']
})
export class DesktopComponentComponent {
  faFacebook = faFacebookF
}
