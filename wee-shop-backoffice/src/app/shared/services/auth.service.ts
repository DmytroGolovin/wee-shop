import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _fireAuth: AngularFireAuth) { }

  public singIn(email: string, password: string): Observable<any>{
    return from(this._fireAuth.signInWithEmailAndPassword(email, password));
  }

  public singOut(){
    return from(this._fireAuth.signOut());
  }
}
