import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{
  ngOnInit(): void {
    setInterval(() =>{
      const currentIndex = this.imageSliderArry.indexOf(this.imageSlider);
      const nextIndex = (currentIndex +1 ) >= this.imageSliderArry.length ? 0 : (currentIndex +1);
      this.changeSlider(nextIndex);
    }, 4000)
  }
  imageSliderArry: string[] =[
    'assets/client/img/slider/slide1.jpg',
    'assets/client/img/slider/slide2.jpg',
    'assets/client/img/slider/slide3.jpg'
  ]

  imageSlider : string = this.imageSliderArry[0];
  
  textSliderArry: string[] = [
    "<h3>MEGA SALE -30%</h3>" +
    "<p>Winter collection for women's. <br>We all have choices for you. Check it out!</p>" +
    '<p class="fr-slider-more-wrap">' +
    '<a class="fr-slider-more" href="#">View collection</a> ' +
     '</p>' ,
     
     "<h3>NEW COLLECTION</h3>" +
      "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>Aliquam consequuntur dolorem doloribus fuga harum</p>" +
      '<p class="fr-slider-more-wrap">' +
       '<a class="fr-slider-more" href="#">Shopping now</a>' +
        '</p>'   ,
        
       "<h3>SUMMER TRENDS</h3>" +
      "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>Aliquam consequuntur dolorem doloribus fuga harum</p>"+
      '<p class="fr-slider-more-wrap">' +
      '<a class="fr-slider-more" href="#">Start shopping</a>'  +
      '</p>'

  ]
    textSlider: string = this.textSliderArry[0];
    showActive1: string = 'active';
    showActive2: string = '';
    showActive3: string = '';

  changeSlider(index: number) {
    switch(index){
      case 0:
        this.imageSlider= this.imageSliderArry[0];
        this.textSlider = this.textSliderArry[0];
        this.showActive1 = 'active';
        this.showActive2 = '';
        this.showActive3 = '';

      break;

      case 1:
        this.imageSlider= this.imageSliderArry[1];
        this.textSlider = this.textSliderArry[1];
        this.showActive1 = '';
        this.showActive2 = 'active';
        this.showActive3 = '';
      break;

      case 2:
        this.imageSlider= this.imageSliderArry[2];
        this.textSlider = this.textSliderArry[2];
        this.showActive1 = '';
        this.showActive2 = '';
        this.showActive3 = 'active';
      break;
    }

  }

}
