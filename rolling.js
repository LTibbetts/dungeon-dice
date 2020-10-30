let Mods = require('./dice_modifiers.js')
let RollInfo = require('./roll_info.js').RollInfo

var randomInt = function(max){
  min = 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var roll = function(dice_input){
  dice_info = dice_input.split('d');
  if(dice_info[0] === ""){
    dice_info = ["1", dice_info[1]];
  }
  number_of_dice = dice_info[0];
  size_of_dice = dice_info[1];
  kept = [];
  discarded = [];
  for(i = 0; i < number_of_dice; i++){
    kept = kept.concat([randomInt(size_of_dice)])
  }
  return new RollInfo(kept, discarded);
};

var checkListFor = function(arr, t){
  res = arr.filter(elem => elem instanceof t);
  return res.length != 0;
}

var getReroll = function(arr){
  res = arr.filter(elem => elem instanceof Mods.Reroll);
  return res[0]
}

var rollWithMods = function(dice_input, mods){
  kept = []
  discarded = []
  dice_info = dice_input.split('d');
  if(dice_info[0] === ""){
    dice_info = ["1", dice_info[1]];
  } 
  number_of_dice = dice_info[0];
  size_of_dice = dice_info[1];
  hasAdvantage = checkListFor(mods, Mods.Advantage);
  hasDisdvantage = checkListFor(mods, Mods.Disadvantage);
  hasReroll = checkListFor(mods, Mods.Reroll);
  if(hasReroll && hasAdvantage) {
    reroll_info = getReroll(mods);
    reroll_number = reroll_info.reroll_below;
    for(i = 0; i < number_of_dice; i++){
      r1 = randomInt(size_of_dice);
      r2 = randomInt(size_of_dice);
      if(r1 <= reroll_number && r2 <= reroll_number){
        min_val = Math.min(r1, r2);
        max_val = Math.max(r1, r2);
        discarded = discarded.concat([min_val]);
        r3 = randomInt(size_of_dice);
        discarded = discarded.concat([Math.min(max_val, r3)]);
        kept = kept.concat([Math.max(max_val, r3)]);
      } else if(r1 <= reroll_number){
        discarded = discarded.concat([r1]);
        r1 = randomInt(size_of_dice)
        discarded = discarded.concat([Math.min(r1, r2)]);
        kept = kept.concat([Math.max(r1, r2)]);
      } else if (r2 <= reroll_number) {
        discarded = discarded.concat([r2]);
        r2 = randomInt(size_of_dice)
        discarded = discarded.concat([Math.min(r1, r2)]);
        kept = kept.concat([Math.max(r1, r2)]);
      } else {
        kept = kept.concat([Math.max(r1, r2)])
        discarded = discarded.concat([Math.min(r1, r2)])
      }
    }
  } else if(hasReroll && hasDisdvantage) {
    reroll_info = getReroll(mods);
    reroll_number = reroll_info.reroll_below;
    for(i = 0; i < number_of_dice; i++){
      r1 = randomInt(size_of_dice);
      r2 = randomInt(size_of_dice);
      if(r1 <= reroll_number && r2 <= reroll_number){
        min_val = Math.min(r1, r2);
        max_val = Math.max(r1, r2);
        discarded = discarded.concat([min_val]);
        r3 = randomInt(size_of_dice);
        discarded = discarded.concat([Math.max(max_val, r3)]);
        kept = kept.concat([Math.min(max_val, r3)]);
      } else if(r1 <= reroll_number){
        discarded = discarded.concat([r1]);
        r1 = randomInt(size_of_dice)
        discarded = discarded.concat([Math.max(r1, r2)]);
        kept = kept.concat([Math.min(r1, r2)]);
      } else if (r2 <= reroll_number) {
        discarded = discarded.concat([r2]);
        r2 = randomInt(size_of_dice)
        discarded = discarded.concat([Math.max(r1, r2)]);
        kept = kept.concat([Math.min(r1, r2)]);
      } else {
        kept = kept.concat([Math.min(r1, r2)])
        discarded = discarded.concat([Math.max(r1, r2)])
      }
    }
  } else if(hasReroll){
    reroll_info = getReroll(mods);
    reroll_number = reroll_info.reroll_below;
    for(i = 0; i < number_of_dice; i++){
      res = randomInt(size_of_dice);
      if(res <= reroll_number){
        discarded = discarded.concat([res]);
        kept = kept.concat([randomInt(size_of_dice)])
      } else {
        kept = kept.concat([res])
      }
    }
  } else if (hasAdvantage) {
    for(i = 0; i < number_of_dice; i++){
      r1 = randomInt(size_of_dice);
      r2 = randomInt(size_of_dice);
      kept = kept.concat([Math.max(r1, r2)])
      discarded = discarded.concat([Math.min(r1, r2)])
    }
  } else if (hasDisdvantage) {
    for(i = 0; i < number_of_dice; i++){
      r1 = randomInt(size_of_dice);
      r2 = randomInt(size_of_dice);
      kept = kept.concat([Math.min(r1, r2)])
      discarded = discarded.concat([Math.max(r1, r2)])
    }
  }
  return new RollInfo(kept, discarded);
};

module.exports = {
  rollWithMods: rollWithMods,
  getReroll: getReroll,
  checkListFor: checkListFor,
  roll: roll,
  randomInt: randomInt
}
