class Reroll {
  constructor(input){
    this.reroll_below = Number(input.substring(1))
  }
}

class Advantage {
  constructor(){

  }
}

class Disadvantage {
  constructor(){

  }
}

module.exports = {
  Reroll: Reroll,
  Advantage: Advantage,
  Disadvantage: Disadvantage
}