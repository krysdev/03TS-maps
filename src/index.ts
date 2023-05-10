/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
// console.log(user);

const company = new Company();
// console.log(company);

const customMap = new CustomMap('map')

// CustomMap class in CustomMap.ts has the below method, and the argument has to be passed
// TypeScript does the implicit check to see if the argument satisfies the 'MapMarker' interface
customMap.addMarker(user);
customMap.addMarker(company);