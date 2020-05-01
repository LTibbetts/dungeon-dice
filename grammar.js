/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var grammar = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,3],$V1=[1,6],$V2=[1,7],$V3=[1,9],$V4=[1,10],$V5=[6,7,9,19,20],$V6=[1,16],$V7=[1,17],$V8=[1,18],$V9=[6,7,9,16,17,18,19,20];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"end":5,"+":6,"-":7,"(":8,")":9,"mod":10,"dice":11,"NUMBER":12,"DICE":13,"dice_mods":14,"dice_mod":15,"REROLL":16,"ADVANTAGE":17,"DISADVANTAGE":18,"COMMENT":19,"EOF":20,"$accept":0,"$end":1},
terminals_: {2:"error",6:"+",7:"-",8:"(",9:")",12:"NUMBER",13:"DICE",16:"REROLL",17:"ADVANTAGE",18:"DISADVANTAGE",19:"COMMENT",20:"EOF"},
productions_: [0,[3,2],[4,3],[4,3],[4,3],[4,1],[4,1],[10,1],[11,1],[11,2],[14,2],[14,1],[15,1],[15,1],[15,1],[5,2],[5,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 return $$[$0] + $$[$0-1].get_output(); 
break;
case 2:
this.$ = $$[$0-2].add_other($$[$0]);
break;
case 3:
this.$ = $$[$0-2].subtract_other($$[$0]);
break;
case 4:
this.$ = $$[$0-1];
break;
case 5: case 6:
this.$ = $$[$0];
break;
case 7:
this.$ = new RollInfo(Number(yytext), []);
break;
case 8:
this.$ = roll($$[$0])
break;
case 9:
this.$ = rollWithMods($$[$0-1], $$[$0])
break;
case 10:
this.$ = $$[$0-1].concat($$[$0])
break;
case 11:
this.$ = $$[$0]
break;
case 12:
this.$ = [new Reroll(yytext)]
break;
case 13:
this.$ = [new Advantage()]
break;
case 14:
this.$ = [new Disadvantage()]
break;
case 15:
this.$ = $$[$0-1].substring(2) + "\n\t";
break;
case 16:
this.$ = "\n\t"
break;
}
},
table: [{3:1,4:2,8:$V0,10:4,11:5,12:$V1,13:$V2},{1:[3]},{5:8,6:$V3,7:$V4,19:[1,11],20:[1,12]},{4:13,8:$V0,10:4,11:5,12:$V1,13:$V2},o($V5,[2,5]),o($V5,[2,6]),o($V5,[2,7]),o($V5,[2,8],{14:14,15:15,16:$V6,17:$V7,18:$V8}),{1:[2,1]},{4:19,8:$V0,10:4,11:5,12:$V1,13:$V2},{4:20,8:$V0,10:4,11:5,12:$V1,13:$V2},{20:[1,21]},{1:[2,16]},{6:$V3,7:$V4,9:[1,22]},o($V5,[2,9],{15:23,16:$V6,17:$V7,18:$V8}),o($V9,[2,11]),o($V9,[2,12]),o($V9,[2,13]),o($V9,[2,14]),o($V5,[2,2]),o($V5,[2,3]),{1:[2,15]},o($V5,[2,4]),o($V9,[2,10])],
defaultActions: {8:[2,1],12:[2,16],21:[2,15]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


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

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 19
break;
case 2:return 13
break;
case 3:return 12
break;
case 4:return 16
break;
case 5:return 17
break;
case 6:return 18
break;
case 7:return '*'
break;
case 8:return '/'
break;
case 9:return 7
break;
case 10:return 6
break;
case 11:return '^'
break;
case 12:return '!'
break;
case 13:return '%'
break;
case 14:return 8
break;
case 15:return 9
break;
case 16:return 'PI'
break;
case 17:return 'E'
break;
case 18:return 20
break;
case 19:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:!.*)/,/^(?:[0-9]+d[0-9]+\b)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:r[0-9]+\b)/,/^(?:adv\b)/,/^(?:dis\b)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:!)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:PI\b)/,/^(?:E\b)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammar;
exports.Parser = grammar.Parser;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}