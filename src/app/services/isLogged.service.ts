import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class IsLoggedService {

  private readonly _isLogged = new BehaviorSubject<boolean>(false);

  isLogged$ = this._isLogged.asObservable();

  constructor() { }

  updateIsLogged = (value: boolean) => {
    this._isLogged.next(value);
  }

}
