import { Component } from '@angular/core';
import { DBService } from "../services/db.service";
import { DB_HISTORY } from '../classes/constants';
import { History } from '../classes/history';


@Component({
    selector: 'app-root',
    templateUrl: './history.template.html'
})
export class HistoryComponent {
    showCards = true;
    records: History[] = [];
    history: History;

    constructor(private db: DBService) {
        console.log("You're in the history component. Welcome!!!");
        this.resetForm();
        this.getRecords();
    }

    toggleCards() {
        this.showCards = !this.showCards;
    }

    resetForm() {
        this.history = new History({
            disease: "",
            date: "",
            treatment: "",
            cost: 800
        });
    }

    onSubmit() {
        this.records.push(new History(this.history));
        this.db.setRecord(DB_HISTORY, this.records);
        this.showCards = true;
        this.getRecords();
        this.resetForm();
        alert("¡The record is saved!");

    }
    getRecords() {
        if (this.getData() === false) {
            this.db.setRecord(DB_HISTORY, []);
        }
        this.records = [];
        let recordsFromDB = <any>this.getData();
        recordsFromDB.forEach(record => {
            this.records.push(new History(record));
        });
    }

    getData() {
        return this.db.getRecord(DB_HISTORY);
    }

    deleteRecord(index: number) {
        if (confirm("Do you really want to delete this record?")) {
            this.records.splice(index, 1);
            this.db.setRecord(DB_HISTORY, this.records);
        }
    }
}
