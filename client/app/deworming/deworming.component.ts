import { Component } from '@angular/core';
import { Deworming } from '../classes/deworming';
import { DBService } from "../services/db.service";
import { DB_DEWORMING } from '../classes/constants';

@Component({
    selector: 'app-root',
    template: `<h1>This is the Deworming component!!!</h1>`,
    templateUrl: './deworming.template.html',
})
export class DewormingComponent {
    showCards = true;
    records: Deworming[] = [];
    deworming: Deworming;

    constructor(private db: DBService) {
        console.log("You're in the DEWORMING component. Welcome!!!");
        this.resetForm();
        this.getRecords();
    }

    toggleCards() {
        this.showCards = !this.showCards;
    }

    resetForm() {
        this.deworming = new Deworming();
    }

    onSubmit() {
        this.records.push(new Deworming(this.deworming));
        this.db.setRecord(DB_DEWORMING, this.records);
        this.showCards = true;
        this.getRecords();
        this.resetForm();
        alert("The record is saved!");
    }

    getRecords() {
        if (this.getData() === false) { // "any" is used for the system not to evaluate type
            this.db.setRecord(DB_DEWORMING, []); // "deworming" db does not exists > Lets create an empty record
        }

        // Lets get "unformated" data from DB and, for EACH record, lets create an instance for our records array
        this.records = [];
        let recordsFromDB = <any>this.getData(); // We don't know DB records type!!
        recordsFromDB.forEach(record => {
            this.records.push(new Deworming(record)); // Let's call "Deworming" constructor
        });
    }

    getData() {
        return this.db.getRecord(DB_DEWORMING);
    }

    deleteRecord(index: number) {
        if (confirm("Do you really want to delete this record?")) {
            this.records.splice(index, 1);
            this.db.setRecord(DB_DEWORMING, this.records);
        }

    }
}