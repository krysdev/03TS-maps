/// <reference types="@types/google.maps" />

// this interface tells every other class how they can be an argument to 'addMarker' method
// an interface can be exported, so it can be used in other files and refered to it as a separate type
export interface MapMarker {
  location: {
    lat: number;
    lng: number;
  };
  markerPopup(): string;
  // test: string;
}

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

  // 'addMarker' can take any argument unless it satisfies the 'MapMarker' interface (arg.location.lat and lng)
  addMarker(mapMarker: MapMarker): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapMarker.location.lat,
        lng: mapMarker.location.lng,
      },
    });

    // showing pop up on click
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        // content: 'Hi there!',
        content: mapMarker.markerPopup(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
