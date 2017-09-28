import { Component } from '@angular/core';
import { DBService } from './services/db.service';
import { Info } from './classes/info';
import { DB_INFO } from './classes/constants';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  showMenu = false; // For showing menu items

  constructor(private db: DBService) {

  }

  setFakeRecords() {
    let data = new Info({
      mainPhoto: "../assets/images/4.jpg",
      name: "Jason",
      birthday: moment("2015-05-13"),
      bio: "Jason es un lindo perro mestizo de color trigo, ojos cafés y una nariz negra como su conciencia. Le encanta jugar y salir a correr con otros perritos, para olerles la cola. Jason es un perro sano, fuerte y muy amado pos sus papás."
    });
    this.db.setRecord(DB_INFO, data);
  }
}
