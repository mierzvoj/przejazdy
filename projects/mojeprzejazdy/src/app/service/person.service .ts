import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../model/person';

const data: Person[] = [
  {
    id: 1,
    name: 'John',
    surname: 'Smiths',
    login: 'JojoSmith1',
    password: 'secretpassword1',
    email: 'JS@pjatk.com.pl',
    phone: 123123123,
    address: {
      street: 'Chwaszczyńska',
      streetNo: 12,
      city: 'Gdynia',
      postcode: 78281,
    },
  },
];
@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private httpClient: HttpClient) {}

  fetchData(): Observable<Person[]> {
    return of(data);
  }

  fetchDataFromServer(): Observable<any> {
    return this.httpClient.get(
      'https://hidden-bastion-66804.herokuapp.com/https://awps-dev.herokuapp.com/user/getlist'
    );
  }
}
