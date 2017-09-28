export class Vaccine {
    name: string = "";
    date: string = "";
    cost: number = 0;
    description: string = "";
    validity_value: number;
    validity_unit: string = "Months";
    constructor(o?: any) {
        if (o) {
            this.name = o.name;
            this.date = o.date;
            this.validity_value = o.validity_value;
            this.validity_unit = o.validity_unit;
            this.cost = o.cost;
            this.description = o.description;
        }
    }
}
