const grammer_parser = require('./grammar.js').parser

function remove_prefix(input, prefixes){
  for(const prefix of prefixes){
    if(input.startsWith(prefix)){
      return input.substring(prefix.length)
    }
  };
  return input;
}

function parse_dice(input){
  output = ""
  try {
    output = grammer_parser.parse(input)
  } catch (err) {
    console.log("Error: " + err)
    output = "" + err 
  }
  return output
}

module.exports = {
  remove_prefix: remove_prefix,
  parse_dice: parse_dice
}
