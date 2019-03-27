import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ICity } from '../cityInfo';

@Component({
  selector: 'app-travel-destination',
  templateUrl: './travel-destination.component.html',
  styleUrls: ['./travel-destination.component.css']
})
export class TravelDestinationComponent implements OnInit {
  @Input() name: string;
	@Input() monument: string;
  @Input() food: string;
  @Input() image: string;
  
	@Output() onSelected = new EventEmitter<ICity>();

  constructor() { }

  ngOnInit() { }

  handleClick() {
		this.onSelected.emit({
			name: this.name,
			monument: this.monument,
      food: this.food,
      image: this.image
    });
    
  }

}
