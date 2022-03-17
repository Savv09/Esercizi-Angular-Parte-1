class User implements user{
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: string;
    address: {
        city: string,
        street: string,
        postalCode: string
    };
    role: Role;
    username: string;
    profilePhotoUrl: string;
    companies: [
        {
            id: number,
            name: string,
            description: string,
            location: {
                city: string,
                street: string,
                postalCode: string
            }
        },
        {
            id: number,
            name: string,
            description: string,
            location: {
                city: string,
                street: string,
                postalCode: string
            }
        }];
    gender: Gender;
    
    constructor(id:number, name:string, surname:string, age: number, dateOfBirth: string, address: {city: string, street: string, postalCode: string}, role: Role, username: string, profilePhotoUrl: string, companies: [{id: number, name: string, description: string, location: {city: string, street: string, postalCode: string}}, {id: number, name: string, description: string, location: {city: string, street: string, postalCode: string}}], gender: Gender ) {
        this.id = id,
        this.name = name,
        this.surname = surname,
        this.age = age,
        this.dateOfBirth = dateOfBirth,
        this.address = address,
        this.role = role,
        this.username = username,
        this.profilePhotoUrl = profilePhotoUrl,
        this.companies = companies,
        this.gender = gender
    }

    getFullName() {
        console.log(`${this.name} ${this.surname}`)
    }
}
