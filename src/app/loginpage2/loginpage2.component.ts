import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage2',
  templateUrl: './loginpage2.component.html',
  styleUrls: ['./loginpage2.component.css']
})
export class Loginpage2Component implements OnInit {

  show:boolean =true;
  constructor() { }

  ngOnInit(): void {
  }
  Show(){
    this.show = !this.show;
  }
}
