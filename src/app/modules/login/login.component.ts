import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersData} from "../../utils/types";
import {STORAGE} from "../../utils/storageItems";
import {IsLoggedService} from "../../services/isLogged.service";
import {Location} from '@angular/common';


export enum MODES {
  login = "login",
  signIn = "signin"
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
  readonly MODES = MODES;

  mode = this.location.path().slice(1);

  form = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly isLoggedService: IsLoggedService,
    private readonly location: Location
    ){}


  ngOnInit() {
  }

  onLogin = () => {
    if (!this.form.valid) return;
    const values = this.form.controls;
    const users: UsersData[] = [...JSON.parse(localStorage.getItem(STORAGE.users)!)];

    if (users.find(item =>
      item.login === values.login.value &&
      item.password === values.password.value)
    ) {

      this.isLoggedService.updateIsLogged(true);
      this.router.navigate(['posts']);
    }

  }

  onBack = () => {
    this.location.back();
  }

}
