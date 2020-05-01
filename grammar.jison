
/* description: Parses and executes mathematical expressions. */

%{

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

var randomInt = function(max){
  min = 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var roll = function(dice_input){
  dice_info = dice_input.split('d');
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
  res = arr.filter(elem => elem instanceof Reroll);
  return res[0]
}

var rollWithMods = function(dice_input, mods){
  kept = []
  discarded = []
  dice_info = dice_input.split('d');
  number_of_dice = dice_info[0];
  size_of_dice = dice_info[1];
  hasAdvantage = checkListFor(mods, Advantage);
  hasDisdvantage = checkListFor(mods, Disadvantage);
  hasReroll = checkListFor(mods, Reroll);
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

%}

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
"!".*                 return 'COMMENT'
[0-9]+d[0-9]+\b       return 'DICE'
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"r"[0-9]+\b           return 'REROLL'
"adv"\b               return 'ADVANTAGE'
"dis"\b               return 'DISADVANTAGE'
"*"                   return '*'
"/"                   return '/'
"-"                   return '-'
"+"                   return '+'
"^"                   return '^'
"!"                   return '!'
"%"                   return '%'
"("                   return '('
")"                   return ')'
"PI"                  return 'PI'
"E"                   return 'E'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */

%left '+' '-'
%left '*' '/'
%left '^'
%right '!'
%right '%'
%left UMINUS

%start expressions

%% /* language grammar */

expressions
    : e end
        { return $2 + $1.get_output(); }
    ;

e
    : e '+' e
        {$$ = $1.add_other($3);}
    | e '-' e
        {$$ = $1.subtract_other($3);}
    | '(' e ')'
        {$$ = $2;}
    | mod
        {$$ = $1;}
    | dice
        {$$ = $1;}
    ;

mod
    : NUMBER
        {$$ = new RollInfo(Number(yytext), []);}
    ;

dice
    : DICE
        {$$ = roll($1)}
    | DICE dice_mods
        {$$ = rollWithMods($1, $2)}
    ;

dice_mods
    : dice_mods dice_mod
        {$$ = $1.concat($2)}
    | dice_mod
        {$$ = $1}
    ;

dice_mod
    : REROLL
        {$$ = [new Reroll(yytext)]}
    | ADVANTAGE
        {$$ = [new Advantage()]}
    | DISADVANTAGE
        {$$ = [new Disadvantage()]}
    ;

end
    : COMMENT EOF
        {$$ = $1.substring(2) + "\n\t";}
    | EOF
        {$$ = "\n\t"}
    ;