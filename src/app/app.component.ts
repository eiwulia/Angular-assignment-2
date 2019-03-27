import { Component } from '@angular/core';
import { ICity } from './cityInfo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inlämningsuppgift 2: Angular!';

  selectedCity: ICity = null;

	selectedDestinationCity(city: ICity) {
		this.selectedCity = city;
  }
  
}
