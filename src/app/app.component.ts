import {Component, OnInit} from '@angular/core';
import {STORAGE} from "./utils/storageItems";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{



  ngOnInit() {
    !localStorage.getItem(STORAGE.users) && localStorage.setItem(STORAGE.users, "[]");
    !localStorage.getItem(STORAGE.logged) && localStorage.setItem(STORAGE.logged, "false");


    onunload = () => {
      localStorage.setItem(STORAGE.logged, "false");
    }
  }

}
