/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
// console.log(user);

const company = new Company();
// console.log(company);

const customMap = new CustomMap('map')

// CustomMap class in CustomMap.ts has the below method, and the argument to be passed
customMap.addMarker(user);
customMap.addMarker(company);