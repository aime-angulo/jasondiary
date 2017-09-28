export enum Genders { "Male", "Female" };
import * as moment from 'moment';

export class Info {
    name: string;
    birthDay: moment.Moment;
    race: string;
    gender: Genders;
    color: string;
    characteristics: string[];
    habilities: string[];
    mainPhoto: string;
    bio: string;

    constructor(o: any) {
        this.name = o.name;
        this.birthDay = moment(o.birthDay);
        this.race = o.race;
        this.gender = o.gender;
        this.color = o.color;;
        this.characteristics = o.characteristics;
        this.habilities = o.habilities;
        this.mainPhoto = o.mainPhoto;
        this.bio = o.bio;
    }
}
