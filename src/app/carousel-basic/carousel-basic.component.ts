import { Component, OnInit } from '@angular/core';
import { Carousel } from '../carousel'
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.scss']
})

export class CarouselBasicComponent implements OnInit {



  carousels: Carousel[] = [
    {id: 0, img: 'https://im.ezgif.com/tmp/ezgif-1-f7f3ce3fd039.jpg'},
    {id: 1, img: 'https://im.ezgif.com/tmp/ezgif-1-6f7667e5b132.jpg'},
    {id: 2, img: 'https://im.ezgif.com/tmp/ezgif-1-d73dd0b67391.jpg'}
  ];


  selectedCarousel: Carousel = this.carousels[0];
  constructor() { }

  ngOnInit() {
  }

  right(slide: Carousel): void {
    let i = this.carousels.findIndex(t => t == slide);
    //if(this.selectedSlider == slide) {
    if (i <= 2) {
    this.selectedCarousel = this.carousels[i + 1];
  }
    //}
  }

  left(slide: Carousel): void {
    let i = this.carousels.findIndex(t=> t ==slide);
    //if(this.selectedSlider == slide) {
    if (i >= 0) {
      this.selectedCarousel = this.carousels[i - 1];
    }
    //}
  }

  
}
  







 