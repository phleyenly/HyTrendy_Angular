import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  imageSlider : string = 'assets/client/img/slider/slide1.jpg';
  
  textSliderArry: string[] = [
    "<h3>MEGA SALE -30%</h3>" +
    "<p>Winter collection for women's. <br>We all have choices for you. Check it out!</p>" +
    '<p class="carousel-more-wrap">' +
    '<a class="carousel-more btn btn-dark" href="#">View collection</a> ' +
     '</p>' ,
     
     "<h3>NEW COLLECTION</h3>" +
      "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>Aliquam consequuntur dolorem doloribus fuga harum</p>" +
      '<p class="carousel-more-wrap">' +
       '<a class="carousel-more btn btn-dark" href="#">Shopping now</a>' +
        '</p>'   ,
        
       "<h3>SUMMER TRENDS</h3>" +
      "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>Aliquam consequuntur dolorem doloribus fuga harum</p>"+
      '<p class="carousel-more-wrap">' +
      '<a class="carousel-more btn btn-dark" href="#">Start shopping</a>'  +
      '</p>'

  ]
    textSlider: string = this.textSliderArry[0];
    showActive1: string = 'active';
    showActive2: string = '';
    showActive3: string = '';

  changeSlider(index: number) {
    switch(index){
      case 0:
        this.imageSlider= 'assets/client/img/slider/slide1.jpg';
        this.textSlider = this.textSliderArry[0];
        this.showActive1 = 'active';
        this.showActive2 = '';
        this.showActive3 = '';

      break;

      case 1:
        this.imageSlider= 'assets/client/img/slider/slide2.jpg';
        this.textSlider = this.textSliderArry[1];
        this.showActive1 = '';
        this.showActive2 = 'active';
        this.showActive3 = '';
      break;

      case 2:
        this.imageSlider= 'assets/client/img/slider/slide3.jpg';
        this.textSlider = this.textSliderArry[2];
        this.showActive1 = '';
        this.showActive2 = '';
        this.showActive3 = 'active';
      break;
    }

  }

}
