import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  config = {
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
