import { faker } from '@faker-js/faker';

// named export (so to import in index.ts the {} are needed) 
export class User {
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
}
