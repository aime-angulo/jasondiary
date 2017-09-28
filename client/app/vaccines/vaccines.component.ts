import { Component } from '@angular/core';
import { Vaccine } from '../classes/vaccine';
import { DBService } from "../services/db.service";
import { DB_VACCINES } from '../classes/constants';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './vaccines.template.html'
})
export class VaccinesComponent {
    showCards = true; // Flag for toggling between cards and form
    records: Vaccine[] = []; // List of records of vaccines in DB
    vaccine: Vaccine; // Element to bind in the form inputs

    constructor(private db: DBService) {
        console.log("You're in the vaccines component. Welcome!!!");
        this.resetForm();
        this.getRecords();
    }

    toggleCards() {
        this.showCards = !this.showCards;
    }

    resetForm() {
        this.vaccine = new Vaccine();
    }

    onSubmit() {
        this.records.push(new Vaccine(this.vaccine));
        this.db.setRecord(DB_VACCINES, this.records);
        this.showCards = true;
        this.getRecords();
        this.resetForm();
        alert("The record is saved!");
    }

    getRecords() {
        if (this.getData() === false) {
            this.db.setRecord(DB_VACCINES, []);
        }
        this.records = [];
        let recordsFromDB = <any>this.getData();
        recordsFromDB.forEach(record => {
            this.records.push(new Vaccine(record));
        });
    }

    getData() {
        return this.db.getRecord(DB_VACCINES);
    }

    deleteRecord(index: number) {
        if (confirm("Do you really want to delete this record?")) {
            this.records.splice(index, 1);
            this.db.setRecord(DB_VACCINES, this.records);
        }
    }
}
