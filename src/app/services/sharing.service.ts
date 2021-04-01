import { Injectable } from '@angular/core';
import {Users} from '../Users';

@Injectable()

export class SharedServiceService {

  constructor() { }

  // tslint:disable-next-line:typedef
  getUsers() {

    let dataList: Users[];
    dataList = [
      new Users('Alisher', 'Kereidin', 19),
      new Users('Tolegen - Tolemegen', 'Yerden', 19),
      new Users('Kenesbekov - Kenes bered ta keted', 'Adil', 20),
      new Users('Anesova - ona sova aya aya', 'Nazar', 20),
      new Users('Sariev - Sartaev ? vrode', 'Miras', 19),
    ];
    return dataList;
  }


}
