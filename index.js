const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
var cli = new Discord.Client({autoReconnect:true});
var servers = {};
function random(min, max){
     min = Math.ceil(0);
     max = Math.floor(20);
     i = Math.floor(Math.random() * (max - min +1)+ min);
 }
bot.commands = new Discord.Collection();
bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));
bot.on('ready', function() {console.log(" McBully https://discordapp.com/oauth2/authorize?client_id=455107086418837524&scope=bot&permissions=104324160")},

bot.on('ready',() => {
  bot.user.setPresence({game: {name: "Sven Bullying Simulator 2018", type: 0}});
}));

bot.on('message', message => {
     if(message.author.id === '294148055228350464') {
    random()
     if (i == 1){
       message.reply("Parle pas !");
       console.log(i);
       }
     if (i == 2){
       message.reply("Ferme la gros porc !");
       console.log(i);
       } 
    if (i ==3){
       message.reply("Ta mère c'est ta soeur.");
       console.log(i);
       }
    if (i ==4){
       message.reply("Tous le monde s'en bas les couilles de ce que tu dis :/");
       console.log(i);
       }
    if (i ==5){
       message.reply("Je te pousse tu roules.");
       console.log(i);
       }    
     if (i ==6){
       message.reply("Ta gueule.");
       console.log(i);
       }
     if (i ==7){
       message.reply("Au lieu de parler va faire du sport.");
       console.log(i);
       }
     if (i ==8){
       message.reply("Non.");
       console.log(i);
       }
      if (i ==9){
       message.reply("Ciao?");
       console.log(i);
       }
      if (i ==10){
       message.reply("Je vais te tacler dans la bouche si tu continues a parler gros tas.");
       console.log(i);
       }
     if (i ==11){
       message.reply("Ta soeur la caravane.");
       console.log(i);
       }
      if (i == 12){
       message.reply("À part ça, le cholestérol, ça va? ");
       console.log(i);
       }
     if (i == 13){
       message.reply("Ferme la et va manger.");
       console.log(i);
       } 
    if (i ==14){
       message.reply("Tu sais faire autre chose a part ouvrir ta gueule?");
       console.log(i);
       }
    if (i ==15){
       message.reply("Mais du coup en avion tu pars en soute? :thinking: ");
       console.log(i);
       }
    if (i ==16){
       message.reply("Arrête de me parler!");
       console.log(i);
       }    
     if (i ==17){
       message.reply("T'as toujours pas compris?");
       console.log(i);
       }
     if (i ==18){
       message.reply("T'as vraiment le QI d'un tabouret...");
       console.log(i);
       }
     if (i ==19){
       message.reply("сука блять");
       console.log(i);
       }
      if (i ==20){
       message.reply("Ça fait quoi d'être une sous-race?");
       console.log(i);
       }

  }})
  



bot.login(process.env.BOT_TOKEN);
