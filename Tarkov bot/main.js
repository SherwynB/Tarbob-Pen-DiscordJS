const Discord = require('discord.js');
const fetch = require('superagent');

const client = new Discord.Client();

const prefix = 'R&';

client.on("ready", ()=>
{
    console.log('on');
})


client.login(~);

client.on('message', msg=>{
    if(msg.content=="ryle")
    {
        msg.reply('large');
    }
})

client.on('message', message =>
{
    if(!message.content.startsWith(prefix)||message.author.bot) 
        return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    
    if(command === 'getpen')
    {
        if(!args.length)
        {
            return message.channel.send('Test');
        }

        Class = args[0];
        BPen = args[1];
        Dura = args[2]/args[3];
        a = (121 - 5000/(45+(Dura*100)*2))*Class*10*0.01;

        test = (121 - (5000/(45+Dura*2)));
        test2 = Class*10*0.01;

        Chance = (0.4*(a-BPen-15)**2)/100;
        test3=(a-BPen-15)**2;

        message.channel.send('Armor Class: '+ Class + '\nBullet pen: ' + BPen+ '\nDurability %: ' +(Dura*100).toFixed(2) + '\nA: '+a);
        message.reply('Penetration chance: ' + (Chance*100).toFixed(2));
    }

    
})