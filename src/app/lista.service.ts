import { Injectable } from '@angular/core';
import { IPlaces } from './iplaces';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  places: IPlaces[] = [
    {city: 'Sydney', id: 0 },
    {city: 'Chicago', id: 1 },
    {city: 'Prague', id: 2 },
    {city: 'Viena', id: 3 },
    {city: 'Athens', id: 4 }
  ];

  constructor() { }

  getData(): IPlaces[] {
		return this.places;
  }
  
  delete(city: IPlaces) {
    this.places = this.places.filter(el => el.city !== city.city);
    return this.places;
  }
 
  add(city: any) {
    this.places.push({city: city, id: this.places.length});
    return this.places;
  }
  
}
