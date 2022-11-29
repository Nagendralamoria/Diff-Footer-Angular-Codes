import { Component, OnInit } from '@angular/core';
import { faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faTwitter,  faFacebook, faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css']
})
export class Footer2Component implements OnInit {
  phone= faPhone;
  mail=faEnvelope;
  twitter =faTwitter;
  facebook =faFacebook;
  instagram =faInstagram;
  linkedin = faLinkedin;
  constructor() { }

  ngOnInit(): void {
  }

}
