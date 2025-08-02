import { Component } from '@angular/core';
import { NgStyle, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [NgStyle, NgFor, NgIf],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css'],
})
export class Portfolio {
  images = [
    { src: '/images/portfolio/imgi_1_poert1.png', bg: '#b35367' },
    { src: '/images/portfolio/imgi_2_port2.png', bg: '#24acc2' },
    { src: '/images/portfolio/imgi_3_port3.png', bg: '#242c38' },
    { src: '/images/portfolio/imgi_1_poert1.png', bg: '#b35367' },
    { src: '/images/portfolio/imgi_2_port2.png', bg: '#24acc2' },
    { src: '/images/portfolio/imgi_3_port3.png', bg: '#242c38' },
  ];

  modalOpen = false;
  activeIndex = 0;

  openModal(i: number) {
    this.modalOpen = true;
    this.activeIndex = i;
  }

  closeModal() {
    this.modalOpen = false;
  }
}
