import { Component, HostListener } from '@angular/core';
import { SearchQuery } from '@yuuvis/framework';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  query: SearchQuery;
  selectedID: string;


  @HostListener('dblclick', ['$event'])
  onClick($event) {
    const darkModeClass = 'dark';
    const body = document.getElementsByTagName('body')[0];
    const bodyClassList = body.classList;
    if (bodyClassList.contains(darkModeClass)) {
      bodyClassList.remove(darkModeClass);
    } else {
      bodyClassList.add(darkModeClass);
    }
  }

  onSubmit(q: SearchQuery) {
    this.query = q;
  }

  select(e) {
    this.selectedID = e;
  }
}
