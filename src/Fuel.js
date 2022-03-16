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
        return "diesel super caro"
    } else if (this.name == "gas") {
      return "gas subiu"
    } else if (this.name == "petroleo") {
      return "petroleo subindo"
    } else {
        return "tudo caríssimo";
    }
  }

  getPrice(){
    if (this.name == "gasolina") {
        return 7.5;
    } else if (this.name == "etanol") {
        return 5.5;
    } else if (this.name == "diesel") {
        return 6;
    } else if (this.name == "gas") {
      return 133
    } else if (this.name == "petroleo") {
      return 115
    } else {
        return 100;
    }
  }
}

module.exports = Fuel;
