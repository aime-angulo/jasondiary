import { Component } from '@angular/core';
import { Info } from '../classes/info';
import { DBService } from "../services/db.service";
import { DB_INFO } from '../classes/constants';
import * as moment from 'moment';

@Component({
    selector: 'app-root',
    template: `<h1>This is the info component!!!</h1>`,
    templateUrl: './info.template.html',
})
export class InfoComponent {
    info: Info;
    birthday: string;

    constructor(private db: DBService) {
        this.info = new Info(db.getRecord(DB_INFO));
        this.birthday = this.info.birthDay.format("YYYY-MM-DD");
    }

    onSubmit() {
        this.info.birthDay = moment(this.birthday);
        this.db.setRecord(DB_INFO, this.info);
        alert("The record is saved!");
    }
}
