import {Component, OnInit} from '@angular/core';
import {IsLoggedService} from "../../services/isLogged.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogged = this.isLoggedService.isLogged$;

  constructor(
    private readonly isLoggedService: IsLoggedService,
  ) {}

  ngOnInit() {
  }

  logOut() {
    this.isLoggedService.updateIsLogged(false);
  }
}
