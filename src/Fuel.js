class Fuel { 
  constructor(name) { 
    this.name = name;
  }
  
  getStatus(){
    if (this.name == "gasolina") {
        return "gasolina cara";
    } else if (this.name == "etanol") {
        return "etanol mais caro";
    } else if (this.name == "diesel") {
        return "diesel super caro";
    } else {
        return "tudo caríssimo";
    }
  }
}

module.exports = Fuel;
