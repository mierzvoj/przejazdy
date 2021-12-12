<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transit } from '../model/transit';

const data: Transit[] = [
  { id: 1, points: [], valid: true, schedules: [] },
  { id: 2, points: [], valid: true, schedules: [] },
  { id: 3, points: [], valid: true, schedules: [] },
  { id: 4, points: [], valid: true, schedules: [] },
  { id: 5, points: [], valid: true, schedules: [] },
  { id: 6, points: [], valid: true, schedules: [] },
  { id: 7, points: [], valid: true, schedules: [] },
  { id: 8, points: [], valid: true, schedules: [] },
  { id: 9, points: [], valid: true, schedules: [] },
  { id: 10, points: [], valid: true, schedules: [] },
];
@Injectable({
<<<<<<< HEAD
  providedIn: 'root',
})
export class TransitService {
  constructor(private httpClient: HttpClient) {}
=======
  providedIn: 'root'
})
export class TransitService {

  constructor() { }
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a

  fetchData(): Observable<Transit[]> {
    return of(data);
  }
<<<<<<< HEAD

  fetchDataFromServer(): Observable<any> {
    return this.httpClient.get('');
  }
=======
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
}
