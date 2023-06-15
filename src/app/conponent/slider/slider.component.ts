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
    "<h3>ĐẠI TIỆC SALE -30%</h3>" +
    "<p>Bộ sưu tập mới cho phái đẹp. <br>Tất cả thứ bạn cần đều ở đây. Xem ngay nào!</p>" +
    '<p class="fr-slider-more-wrap">' +
    '<a class="fr-slider-more" href="/products">Xem bộ sưu tập</a> ' +
     '</p>' ,
     
     "<h3>MẪU MỚI TRENDY</h3>" +
      "<p>Những sắc màu trendy mang đến sự ấm cúng và bình an cho nàng và chàng.<br>Còn chờ gì nữa mà không nhanh tay sở hữu cho mình những items cực HOT này ngay hôm nay nhỉ?</p>" +
      '<p class="fr-slider-more-wrap">' +
       '<a class="fr-slider-more" href="/products">Mua sắm ngay</a>' +
        '</p>'   ,
        
       "<h3>DẤU ẤN ĐỘC BẢN</h3>" +
      "<p>Mini Collection “DẤU ẤN ĐỘC BẢN” chính là những mảnh ghép còn lại giúp bạn tô điểm “bức tranh phong cách” với thật nhiều màu sắc theo một cách rất riêng.</p>"+
      '<p class="fr-slider-more-wrap">' +
      '<a class="fr-slider-more" href="/products">Khám phá ngay</a>'  +
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
