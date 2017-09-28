export class History {
    disease: string = "";
    date: string = "";
    treatment: string = "";
    cost: number = 0;

    constructor(x?: any) {
        if (x) {
            this.disease = x.disease;
            this.date = x.date;
            this.treatment = x.treatment;
            this.cost = x.cost;
        }
        return this;
    }
}

