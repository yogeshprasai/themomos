import { Component, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  innerHeight;
  innerWidth;

  constructor(){
    this.innerHeight = (window.screen.height);
    this.innerWidth = (window.screen.width);
  }

  menuClick(){
    if(this.innerWidth < 768){
      
    }
  }
}
