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
      output = output + "\n```diff\n- Discarded: " + JSON.stringify(this.discarded) + "\n+ Keeping: " + JSON.stringify(this.kept) + " = " + this.get_sum() + "\n```";
    } else {
      output = output + "\n```diff\n+ " + JSON.stringify(this.kept) + " = " + this.get_sum() + "\n```";
    }
    return output;
  }
};

module.exports = {
  RollInfo: RollInfo
}
