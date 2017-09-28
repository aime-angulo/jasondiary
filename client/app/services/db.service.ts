import { Injectable } from "@angular/core";

@Injectable()
export class DBService {
    getRecord(key): object | boolean {
        let data = localStorage.getItem(key);
        if (data) {
            try {
                return JSON.parse(data);
            } catch (e) {
                return <any>data;
            }
        } else {
            return false;
        }
    }

    setRecord(key: string, data: any) {
        if (typeof data !== "string") {
            data = JSON.stringify(data);
        }
        localStorage.setItem(key, data);
    }
}
