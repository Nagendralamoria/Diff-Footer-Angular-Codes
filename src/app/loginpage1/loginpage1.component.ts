import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage1',
  templateUrl: './loginpage1.component.html',
  styleUrls: ['./loginpage1.component.css']
})
export class Loginpage1Component implements OnInit {
show:boolean =true;
  constructor() { }

  ngOnInit(): void {
  }
  Show(){
    this.show = !this.show;
  }
}
