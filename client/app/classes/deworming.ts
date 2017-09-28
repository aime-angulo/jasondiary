export class Deworming {
    date: string = "";
    description: string = "";
    cost: number = 0;

    constructor(y?: any) {
        if (y) {
            this.date = y.date;
            this.description = y.description;
            this.cost = y.cost;
        }
        return this;
    }

}