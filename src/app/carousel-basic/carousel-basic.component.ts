import { Component, OnInit } from '@angular/core';
import { Carousel } from '../carousel'
@Component({
  selector: 'app-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.scss']
})
export class CarouselBasicComponent implements OnInit {



  carousels: Carousel[] = [
    {id: 0, img: 'assets/img/img2_wide.jpg'},
    {id: 1, img: 'assets/img/img1_wide.jpg'},
    {id: 2, img: 'assets/img/img3_wide.jpg'}
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
