import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {STORAGE} from "../utils/storageItems";

@Injectable()
export class IsLoggedService {

  private $isLogged = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem(STORAGE.logged)!));
  public id = "id" + Math.random().toString(16).slice(2)

  public get isLogged():Observable<boolean> {
    return this.$isLogged.asObservable();
  }


  updateIsLogged = (value: boolean) => {
    localStorage.setItem(STORAGE.logged, JSON.stringify(value));
    this.$isLogged.next(value);
  }

  constructor() { }
}
