import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Address } from '../model/address';
import { Transit } from '../model/transit';

const data: Transit[] = [
  // {
  //   id: 1,
  //   points: 'lalala',
  //   valid: true,
  //   schedule: '2022-01-30',
  //   address: [
  //     {
  //       street: 'Chwaszczyńska',
  //       streetNo: 12,
  //       city: 'Gdynia',
  //       postcode: 78281,
  //     },
  //   ],
  //   group: [
  //     {
  //       id: 1,
  //       name: 'John',
  //       surname: 'Smiths',
  //       login: 'JojoSmith1',
  //       password: 'secretpassword1',
  //       email: 'JS@pjatk.com.pl',
  //       phone: 123123123,
  //       address: {
  //         street: 'Chwaszczyńska',
  //         streetNo: 12,
  //         city: 'Gdynia',
  //         postcode: 78281,
  //       },
  //     },
  //   ],
  // },
];
@Injectable({
  providedIn: 'root',
})
export class TransitService {
  constructor(private httpClient: HttpClient) {}
  private dataSubscription: Subscription = Subscription.EMPTY;
  dataSource: MatTableDataSource<Transit> = new MatTableDataSource<Transit>();

  fetchData(): Observable<Transit[]> {
    console.log(data);
    return of(data);
  }

  fetchDataFromServer(): Observable<Transit[]> {
    return this.httpClient
      .get(
        'https://hidden-bastion-66804.herokuapp.com/https://awps-dev.herokuapp.com/transit/all'
      )
      .pipe(
        map((data) => {
          const result: Transit[] = (data as Transit[]).map((item) => ({
            ...item,
            points: this.mapAddressesToPoints(item.address),
          }));
          console.log('transity' + result);
          return result;
        })
      );
  }

  mapAddressesToPoints(addresses: Address[]): string {
    return addresses.reduce((previous: string, current: Address) => {
      return previous + (current.city ?? '-') + '; ';
    }, '');
  }
}
