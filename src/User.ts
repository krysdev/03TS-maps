import { faker } from '@faker-js/faker'; // no need to install type definitions - already in TS
import { MapMarker } from './CustomMap'; // imported interface -> 'implements'

// named export (not default, so to import it in index.ts the {} are needed)
// 'implements' means the instance of the class must satisfy all the properites required by the 'MapMaker' interface  [this is optional]
export class User implements MapMarker {
  // we have only type annotations below, the properties have not been initialized
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    // initialize 'name'
    this.name = faker.name.firstName();

    // initialize 'location' as an object with lat and lng
    // we do parseFloat to convert the faker generated lat and lng strings to numbers
    this.location = {
      // lat: faker.address.longitude() --> string
      lat: parseFloat(faker.address.latitude()), // number
      lng: parseFloat(faker.address.longitude()),
    };
  }

  // a method
  markerPopup(): string {
    return `User name: ${this.name}`;
  }
}
