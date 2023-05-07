/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';

export class CustomMap {
  // 'googleMap' property has a type of the instance of the Map() class
  // it is set to private, so it can only be used by the methods within 'CustomMap'
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    // initialize the property
    this.googleMap = new google.maps.Map(
      // A required argument for the Map() class is the HTML element where we place the map in index.html
      document.getElementById(divId) as HTMLElement,
      // The second argument is optional; it's an object for map customization, but we add it here
      {
        zoom: 1,
        center: { lat: 0, lng: 0 },
      }
    );
  }
  
  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  addCompanyMarker(company: Company): void {}
}
