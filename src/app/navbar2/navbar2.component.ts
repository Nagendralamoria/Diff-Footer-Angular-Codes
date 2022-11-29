import { Component, OnInit } from '@angular/core';
import { faBars,faXmark} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {


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
