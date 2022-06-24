import { School } from "./school";

export class Formation {
    id: number;
    dateFormation: string;
    topic: string;
    concernedPeople: string;
    schoolId: number;
    schoolRefId: School;
    constructor() {
        this.schoolRefId = new School();
    }
}
