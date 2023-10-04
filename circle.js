//2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle{
    constructor(color,radius){
        this.color=color;
        this.radius=radius;
    }
    setColor(color){
        this.color=color;
    }
    setRadius(radius){
        this.radius=radius;
    }
    getColor(){
        return this.color;
    }
    getRadius(){
        return this.radius;
    }
    getArea(){
            return `the area is ${(this.radius)*(this.radius)*4}`;
        }
        
   getCircumference(){
        return `the circumference is ${(this.radius)*2*(Math.PI)}`;
    }
   display(){
       let res =  `[ radius : ${this.getRadius()} , color : ${this.getColor()}]`;
       return res;
   }
};
let circle1=new Circle();
let circle2=new Circle("red")
let circle3=new Circle(3,"green")
circle1.setRadius(6)
circle1.setColor("white")
circle2.setRadius(9)
console.log(circle1.display())
console.log(circle2.display())
console.log(circle3.getArea())
console.log(circle3.getCircumference())

