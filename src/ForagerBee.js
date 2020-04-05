class ForagerBee extends HoneyMakerBee {
  // TODO..
  constructor(job, canFly, treasureChest) {
    super();
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(coin) {
    this.treasureChest.push(coin);
  }

};
