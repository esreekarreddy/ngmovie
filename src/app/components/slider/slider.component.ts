import { Component, OnInit, Input } from '@angular/core';
import {animate,state,style,transition,trigger} from '@angular/animations';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input()  items:any[]=[];
  currentSlideIndex:number = 0;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
    },5000);
  }

}
