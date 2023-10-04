//3. Write a “person” class to hold all the details.
class person {
    constructor(name,age,gender,height,weight,qualification,city,state){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
        this.qualification = qualification;
        this.city = city;
        this.state = state;
    }
    details(){
        console.log(`
            name: ${this.name}
            age: ${this.age}
            gender: ${this.gender}
            height: ${this.height}
            weight: ${this.weight}
            qualification: ${this.qualification}
            city: ${this.city}
            state: ${this.state}
            `)
    }
}
let person_details = new person("Neshanth",24,"male","174cm","74kg","BE - CS","villupuram","tamil Nadu");
person_details.details();