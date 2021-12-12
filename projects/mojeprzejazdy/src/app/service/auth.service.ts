import { Injectable } from "@angular/core";
<<<<<<< HEAD
import { Observable, of } from "rxjs";
=======
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a

@Injectable({ providedIn: 'root' })
export class AuthService {

<<<<<<< HEAD
    authenticate(login: {
        username: string;
        password: string;
    }): Observable<boolean> {
        if (login.username === 'admin' && login.password == 'admin') {
            return of(true);
        } else {
            return of(false);
        }
    }
=======
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
}