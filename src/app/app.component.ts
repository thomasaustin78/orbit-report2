import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report2';
  sourceList: Satellite[];
  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          let newSatellite = {}
          
          for(let i = 0; i <fetchedSatellites.length; i++) {
            newSatellite = new Satellite (
              fetchedSatellites[i].name,
              fetchedSatellites[i].type,
              fetchedSatellites[i].launchDate,
              fetchedSatellites[i].orbitType,
              fetchedSatellites[i].operational

            )
            this.sourceList.push(newSatellite);
          }
       }.bind(this));
    }.bind(this));
 
 }
}






