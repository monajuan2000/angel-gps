import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  title = 'angel-gps-map'

  position = {
   lat: 6.1997056,
   lng: -75.5892224
  }

  label = {
    color: 'red',
    text: 'Marcador'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
