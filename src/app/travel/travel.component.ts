import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ICity } from '../cityInfo';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  
  cities: ICity[] = [
    {name: 'Paris', monument: 'Eiffel Tower', food: 'croissants', image: 'https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72'},
    {name: 'Los Angeles', monument: 'Hollywood', food: 'mexican food', image: 'https://static.adweek.com/adweek.com-prod/wp-content/uploads/2017/11/la-hollywood-PAGE-2017.jpg'}, 
    {name: 'New York', monument: 'Empire State Building', food: 'hot dogs', image: 'https://d12dkjq56sjcos.cloudfront.net/pub/media/wysiwyg/New-York-Skyline-Big-Bus-Tours-Jan-2018.jpg'}
  ];

  @Output() onSelected = new EventEmitter<ICity>();

  isClicked: boolean = false;
  selectedCity: ICity = null;
  selectedCityColor: ICity;


  constructor() { }

  ngOnInit() { }

  selectedDestination(city: ICity) {
    this.selectedCity = city;
    this.onSelected.emit(city);

    this.selectedCityColor = city;
    this.isClicked = false;
  }

  deselect() {
    this.selectedCity = null;
    this.isClicked = true;
    this.selectedCityColor = null;
  }

}
