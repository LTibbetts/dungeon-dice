require('dotenv').config();

const Discord = require('discord.js');
const Parser = require('./parser.js')
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

const PREFIXES = ["!r ", "!roll "];

// var createRingBuffer = function(length){
//   /* https://stackoverflow.com/a/4774081 */
//   var pointer = 0, buffer = []; 

//   return {
//     get  : function(key){
//         if (key < 0){
//             return buffer[pointer+key];
//         } else if (key === false){
//             return buffer[pointer - 1];
//         } else{
//             return buffer[key];
//         }
//     },
//     find : function(message){
//       return head(buffer.filter(item => item.content == message.content && item.author.username == message.author.username))
//     },
//     push : function(item){
//       buffer[pointer] = item;
//       pointer = (pointer + 1) % length;
//       return item;
//     },
//     prev : function(){
//         var tmp_pointer = (pointer - 1) % length;
//         if (buffer[tmp_pointer]){
//             pointer = tmp_pointer;
//             return buffer[pointer];
//         }
//     },
//     next : function(){
//         if (buffer[pointer]){
//             pointer = (pointer + 1) % length;
//             return buffer[pointer];
//         }
//     }
//   };
// };

// messageHistory = createRingBuffer(100);

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

function detect_prefixes(input, prefixes){
  for (const prefix of prefixes){
    if(input.startsWith(prefix)){
      return true;
    }
  };
  return false;
};

function run_message(message){
  let current_input = message.content

  if(detect_prefixes(current_input, PREFIXES)){
    current_input = Parser.remove_prefix(current_input, PREFIXES)
    output = Parser.parse_dice(current_input)
    name = ""
    if(message.member.nickname){
      name = message.member.nickname
    } else {
      name = message.author.username
    }
    // messageHistory.push([message.content, output])
    message.channel.send("__" + name + "__ rolled " + output)
  }
}

bot.on('message', message => {
  run_message(message)
})

bot.on('ready', () => {
  setInterval(() => {
    bot.user.setActivity("!r help", { type: "LISTENING", url: "https://www.github.com/LTibbetts/dungeon-dice"})
  }, 36000000);
})

// bot.on('messageUpdate', (oldMessage, newMessage) => {
//   if(oldMessage.content !== newMessage.content){
//     messageHistory.find(oldMessage.content)[1]
//     run_message(newMessage)
//   }
// })
