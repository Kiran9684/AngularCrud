export class Employee {
    id: number;
    name: string;
    gender: string;
    email?: string; //? -> indicates that this property is optional , we can either provide a value or not
    phoneNumber?: number;
    contactPreference: string;
    dateOfBirth: Date;
    department: string;
    isActive: boolean;
    photoPath?: string;
}