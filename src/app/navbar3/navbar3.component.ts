import { Component, OnInit } from '@angular/core';
import { faBars,faXmark} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar3',
  templateUrl: './navbar3.component.html',
  styleUrls: ['./navbar3.component.css']
})
export class Navbar3Component implements OnInit {

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
