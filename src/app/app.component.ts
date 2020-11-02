import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  selectedItem: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.selectedItem = this.router.url;
  }

  getItem(item) {
    this.selectedItem = item;
  }

  getClassByValue(item) {
    if (item === this.selectedItem) {
      return "module-selected";
    } else {
      return "";
    }
  }

}
