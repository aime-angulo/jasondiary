import { Component } from '@angular/core';
import { DB_INFO, DB_VACCINES, DB_HISTORY } from '../classes/constants';
import { DBService } from '../services/db.service';
import { Info } from '../classes/info';
import * as moment from 'moment';
import { Vaccine } from "../classes/vaccine";
import { History } from "../classes/history"


@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './home.template.html',
    styleUrls: ['./home.css']
})
export class HomeComponent {
    info: Info;
    vaccines: Vaccine[] = []; // List of records of vaccines in DB
    vaccine: Vaccine; // Element to bind in the form inputs
    histories: History[] = [];
    history: History;

    constructor(private db: DBService) {
        this.getVaccines();
        this.getHistory();
    }

    ngOnInit() {
        this.getInfo();
    }

    getInfo() {
        let info = this.db.getRecord(DB_INFO);
        if (info) {
            this.info = new Info(info);
            console.log(this.info.birthDay);
        }
    }

    get age(): string {
        if (this.info.birthDay) {
            return moment().diff(this.info.birthDay, 'years').toString();
        } else {
            return "0";
        }
    }

    getFromDB(dbName: string) {
        if (this.getData(dbName) === true) {
            this.db.setRecord(dbName, []);
        }
        let records = [];
        return <any>this.getData(dbName);
    }

    getData(dbName: string) {
        return this.db.getRecord(dbName);
    }

    getVaccines() {
        this.getFromDB(DB_VACCINES).forEach(record => {
            this.vaccines.push(new Vaccine(record));
        });

        if (this.vaccines.length > 0) { // There are vaccines records!!
            this.vaccine = this.vaccines[0];
        }
    }

    getHistory() {
        this.getFromDB(DB_HISTORY).forEach(record => {
            this.histories.push(new History(record));
        });

        if (this.histories.length > 0) {
            this.history = this.histories[0];
        }
    }
}
