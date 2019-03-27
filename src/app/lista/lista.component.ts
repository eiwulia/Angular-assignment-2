import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import { IPlaces } from '../iplaces';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  listaService: ListaService;
  places: IPlaces[] = null;
  newCity: any;

  chosenOptions: IPlaces[] = [];
  selectedPlace: IPlaces;


  onSelect(clicked: IPlaces): void {
    //when i click on a city i select it and add it to the list of clicked options if it is not already on the list:
    if (this.chosenOptions.find(x => x === clicked)) {
      this.chosenOptions = this.chosenOptions.filter(x => x !== clicked);
    } else {
      this.chosenOptions.push(clicked);
    }
    console.log('you chose: ' + clicked.city, this.chosenOptions);
  }

  isInList(city: IPlaces) {
    if (this.chosenOptions.find(x => x === city)) {
      return true;
    } else {
      return false;
    }
  }

  constructor(listaService: ListaService) {
    this.listaService = listaService;
  }

  ngOnInit() {
    this.places = this.listaService.getData();
  }

  deleteCity(city: IPlaces) {
    this.places = this.listaService.delete(city);
  }

  addCity(city: IPlaces) {
    this.places = this.listaService.add(city);
    this.newCity = null;
  }

}
