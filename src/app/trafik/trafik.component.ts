import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trafik',
  templateUrl: './trafik.component.html',
  styleUrls: ['./trafik.component.css']
})
export class TrafikComponent implements OnInit {

  divId: number = 0;

  constructor() { }

  ngOnInit() { }

  trafficLights() {
    if (this.divId == 3) {
      this.divId = 0;
    } else {
      this.divId += 1;
    }
  }

}
