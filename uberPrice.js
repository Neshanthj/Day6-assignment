//4) write a class to calculate uber price.

class UberPrice {
    constructor(distance) {
      this.distance = distance;
      
    }
    getPrice() {
      return (this.distance ) *20;// 1 kilometer = 20 rupees
    }
  }
  
  let uber = new UberPrice(15);//for the covered distance or total distance
  console.log(uber.getPrice());

  