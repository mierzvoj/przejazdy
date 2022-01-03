import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Address } from '../model/address';

const data: Address[] = [
  {
    street: 'Chwaszczyńska',
    streetNo: 12,
    city: 'Gdynia',
    postcode: 78281,
  },
];
@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private httpClient: HttpClient) {}

  fetchData(): Observable<Address[]> {
    console.log(data, 'adresy');
    return of(data);
  }

  fetchDataFromServer(): Observable<any> {
    return this.httpClient.get('/api/address/all');
  }
}
