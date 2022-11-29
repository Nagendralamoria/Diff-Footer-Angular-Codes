import { Component, OnInit } from '@angular/core';
import { faTwitter,  faFacebook, faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.css']
})
export class Footer1Component implements OnInit {
  twitter =faTwitter;
  facebook =faFacebook;
  instagram =faInstagram;
  linkedin = faLinkedin;
  constructor() { }

  ngOnInit(): void {
  }

}
