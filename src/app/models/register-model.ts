import { UserModel } from "./user";

export class RegisterModel {
    id: number;
    fullName: string;
    birthDate: string;
    birthDateCountry: string;
    familyStatus: string;
    childrenNumber: number;
    workPartner: string;
    address: string;
    email: string;
    phoneNumber: number;

    workPlace: string;
    hiringDate: string;
    currentRank: string;
    upgradeDate: string;
    scientificCrtificate: string;
    specialization: string;
    assignmentDate: Date;
    demarcationDate: Date;
    newTeacher: boolean;
    newTeacherScience: boolean;

    //Summary of control 
    inspectorStatus: boolean;
    controlDate: string;
    number: number;
    language: string;
    school: string;
    circle: string;
    inspectorName: string;
    comment: string;
    password: string;
    roleCode: string;

}



export class RegisterTeacherModel {
    id: number;
    fullName: string;
    birthDate: string;
    birthDateCountry: string;
    familyStatus: string;
    childrenNumber: number;
    workPartner: string;
    address: string;
    email: string;
    phoneNumber: number;
    userId: number;
    schoolId: number;
    hiringDate: string;
    rankId: number;
    rankName: string;
    upgradeDate: string;
    scientificCrtificate: string;
    specialization: string;
    assignmentDate: Date;
    demarcationDate: Date;
    newTeacher: boolean;
    newTeacherScience: boolean;

    //Summary of control 
    inspectorStatus: boolean;
    controlDate: string;
    number: number;
    language: string;
    school: string;
    circle: string;
    inspectorName: string;
    comment: string;
    password: string;
    roleCode: string;
    validationStatus: string;
    identificationCode: string;
    commentStatus: string;
    userRefId: UserModel;
    constructor() {
        this.userRefId = new UserModel();
    }
}


export class RegisterDirectorModel {
    id: number;
    fullName: string;
    birthDate: string;
    birthDateCountry: string;
    familyStatus: string;
    childrenNumber: number;
    workPartner: string;
    address: string;
    email: string;
    phoneNumber: number;

    schoolId: number;
    hiringDate: string;
    rankId: number;
    upgradeDate: string;
    scientificCrtificate: string;
    specialization: string;
    assignmentDate: Date;
    demarcationDate: Date;
    newTeacher: boolean;
    newTeacherScience: boolean;

    //Summary of control 
    inspectorStatus: boolean;
    controlDate: string;
    number: number;
    language: string;
    school: string;
    circle: string;
    inspectorName: string;
    comment: string;
    password: string;
    roleCode: string;
    validationStatus: string;
    identificationCode: string;
    commentStatus: string;
}


export class RegisterInspectorModel {
    id: number;
    fullName: string;
    birthDate: string;
    birthDateCountry: string;
    familyStatus: string;
    childrenNumber: number;
    workPartner: string;
    address: string;
    email: string;
    phoneNumber: number;

    schoolId: number;
    hiringDate: string;
    rankId: number;
    upgradeDate: string;
    scientificCrtificate: string;
    specialization: string;
    assignmentDate: Date;
    demarcationDate: Date;
    newTeacher: boolean;
    newTeacherScience: boolean;

    //Summary of control 
    inspectorStatus: boolean;
    controlDate: string;
    number: number;
    language: string;
    school: string;
    circle: string;
    inspectorName: string;
    comment: string;
    password: string;
    roleCode: string;
    validationStatus: string;
    identificationCode: string;
    commentStatus: string;

}