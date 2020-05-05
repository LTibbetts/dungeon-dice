class RollInfo {
  constructor(kept, discarded){
    if(Array.isArray(kept)){
      this.kept = kept;
    }else{
      this.kept = [kept];
    }

    if(Array.isArray(discarded)){
      this.discarded = discarded;
    }else{
      this.discarded = discarded;
    }
  }

  get_sum() {
    return this.kept.reduce((a,b) => a + b, 0);
  }

  get_kept() {
    return this.kept;
  }

  get_discarded() {
    return this.discarded;
  }

  add_other(roll_info) {
    this.kept = this.kept.concat(roll_info.get_kept());
    this.discarded = this.discarded.concat(roll_info.get_discarded());
    return this;
  }

  subtract_other(roll_info) {
    this.kept = this.kept.concat(roll_info.get_kept().map(value => -value));
    this.discarded = this.discarded.concat(roll_info.get_discarded());
    return this;
  }

  get_output(){
    var output = "";
    if(this.discarded.length > 0){
      output = output + "Discarded: " + JSON.stringify(this.discarded) + "\n\tKeeping: ";
    }
    output = output + JSON.stringify(this.kept) + " = ";
    output = output + this.get_sum();
    return output;
  }
};

module.exports = {
  RollInfo: RollInfo
}