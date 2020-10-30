
/* description: Parses and executes mathematical expressions. */

%{

let Mods = require('./dice_modifiers.js')
let RollInfo = require('./roll_info.js').RollInfo
let rolling = require('./rolling.js')

%}

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
"help"                return 'HELP'
"!".*                 return 'COMMENT'
"r"[0-9]+             return 'REROLL'
("adv")               return 'ADVANTAGE'
("dis")               return 'DISADVANTAGE'
d[0-9]+               return 'SHORTDICE'
[0-9]+d[0-9]+         return 'DICE'
[0-9]+("."[0-9]+)?    return 'NUMBER'
"-"                   return '-'
"+"                   return '+'
"!"                   return '!'
"("                   return '('
")"                   return ')'
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
    | help end
        { return $1; } 
    ;

help
    : HELP
        {$$ = "for help!\nSee: https://ltibbetts.github.io/dungeon-dice/";}
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
        {$$ = rolling.roll($1)}
    | SHORTDICE
        {$$ = rolling.roll($1)}
    | DICE dice_mods
        {$$ = rolling.rollWithMods($1, $2)}
    | SHORTDICE dice_mods
        {$$ = rolling.rollWithMods($1, $2)}
    ;

dice_mods
    : dice_mods dice_mod
        {$$ = $1.concat($2)}
    | dice_mod
        {$$ = $1}
    ;

dice_mod
    : REROLL
        {$$ = [new Mods.Reroll(yytext)]}
    | ADVANTAGE
        {$$ = [new Mods.Advantage()]}
    | DISADVANTAGE
        {$$ = [new Mods.Disadvantage()]}
    ;

end
    : COMMENT EOF
        {$$ = "``" + $1.substring(1).trim() + "``";}
    | EOF
        {$$ = ""}
    ;
