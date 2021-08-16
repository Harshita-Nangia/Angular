export class Employee{

    constructor(
        public employeeName:string="",
        public employeePhoneNumber:string="",
        public employeeEmail:string="",
        public employeeDob:Date,
        public employeeAddress:{
            line1: string,
            line2: string,
            city:string,
            state:string,
            pincode:string
        },
    ){}
}