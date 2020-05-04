# Dungeon Dice

Dungeon Dice is a simple dice rolling bot made for Discord.

## Usage

All commands will start with ``!r`` followed by additional information.

* Normal Roll
   * ``!r 1d20``
   * ``!r 2d6``
* Roll with Modifiers
   * ``!r 1d20 + 5``
   * ``!r 1d20 - 2``
* Roll with Advantage
   * ``!r 1d20 adv``
* Roll with Advantage with Modifiers
   * ``!r 1d20 adv - 2``
* Roll with Disadvantage
   * ``!r 1d20 dis``
* Roll with Disadvantage with Modifier
   * ``!r 1d20 dis + 4``
* Reroll Once
   * For each dice rolled, will reroll once if the number is less than or equal to the given number
   * ``!r 2d6 r2``
      * If the roll is [2, 4] the 2 will be rerolled once
      * If the roll is [1, 2] the 1 and 2 will both be rerolled once
      * If the roll is [3, 4] nothing changes
      * Any dice that is rerolled will be output in the discarded list
* Combining Reroll with Advantage / Disadvantage
   * I did my best to follow the PHB rulling for thes senarios


 
