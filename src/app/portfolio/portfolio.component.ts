import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  imageArray = [
    {
      src: "./assets/img/hello.png",
      alt: "portfolio image 1"
    },
    {
      src: "./assets/img/wanaka.png",
      alt: "portfolio image 2"
    },
    {
      src: "./assets/img/perfomance.png",
      alt: "portfolio image 3"
    },
    {
      src: "./assets/img/your-music.png",
      alt: "portfolio image 4"
    },
    {
      src: "./assets/img/build.png",
      alt: "portfolio image 5"
    },
    {
      src: "./assets/img/make.png",
      alt: "portfolio image 6"
    },
    {
      src: "./assets/img/hello2.png",
      alt: "portfolio image 7"
    },
    {
      src: "./assets/img/wanaka2.png",
      alt: "portfolio image 8"
    },
    {
      src: "./assets/img/perfomance2.png",
      alt: "portfolio image 9"
    },
    {
      src: "./assets/img/your-music2.png",
      alt: "portfolio image 10"
    },
    {
      src: "./assets/img/build2.png",
      alt: "portfolio image 11"
    },
    {
      src: "./assets/img/make2.png",
      alt: "portfolio image 12"
    },
  ];

  visibleImgArray = [];

  constructor() {
    this.visibleImgArray = this.visibleImgArray.concat(this.imageArray.slice(0, 6));
  }

  ngOnInit() {
  }

  showMore() {
    this.visibleImgArray = this.visibleImgArray.concat(this.imageArray.slice(this.visibleImgArray.length, this.visibleImgArray.length + 6));
  }
}
