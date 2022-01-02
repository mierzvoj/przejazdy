import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Address } from '../model/address';
import { Transit } from '../model/transit';

const data: Transit[] = [];
@Injectable({
  providedIn: 'root',
})
export class TransitService {
  constructor(private httpClient: HttpClient) { }
  private dataSubscription: Subscription = Subscription.EMPTY;
  dataSource: MatTableDataSource<Transit> = new MatTableDataSource<Transit>();

  fetchData(): Observable<Transit[]> {
    console.log(data);
    return of(data);
  }

  fetchDataFromServer(): Observable<Transit[]> {
    return this.httpClient.get('/api/transit/all')
      .pipe(map(data => {
        const result: Transit[] = (data as Transit[])
          .map(item => ({ ...item, points: this.mapAddressesToPoints(item.address) }));
        console.log(result);
        return result;
      }));
  }

  mapAddressesToPoints(addresses: Address[]): string {
    return addresses.reduce((previous: string, current: Address) => {
      return previous + (current.city ?? '-') + '; ';
    }, '');
  }
}

