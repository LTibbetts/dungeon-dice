const grammer_parser = require('./grammar.js').parser

function remove_prefix(input, prefix){
  return input.substring(prefix.length)
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