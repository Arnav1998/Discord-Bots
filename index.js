const superagent = require('superagent');
const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njg4OTkzMjcwMTE3Njk1NTE0.Xm8gwA.2T2n5rC3zw00H6iYl6ve-x97ZBs';

bot.login(token);

bot.on('message', msg => {
    if(msg.content === "!test") {
        superagent.get('https://www.breakingbadapi.com/api/quote/random?author=Walter+White').end((err, response) => {
            msg.reply(response.body[0].quote);
        });
    }
})

