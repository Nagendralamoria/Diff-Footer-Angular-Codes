import { Component, OnInit } from '@angular/core';
import { faBars,faXmark} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {

  filmIcon = faBars;
  crossIcons= faXmark;
  constructor() { }

  ngOnInit(): void {
  }
  menuVariable:boolean=false;
  opennav(val : boolean){
  
    this.menuVariable = val;
 
  }

}
