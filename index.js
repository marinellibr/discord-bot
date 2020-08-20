const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!")
  }

  if (msg.content.substring(0, 1) == '!') {
    var args = msg.content.substring(1).split(' ');
    var cmd = args[0];
   
    args = args.splice(1);
    switch(cmd) {
        // !pong
        case 'pong':
            msg.reply("Ping então nessa porra")
        break;

        case 'amor':
            msg.reply("Você é o amor da minha vida <3")
        break;
     }
  }
})
client.login("NzQ1NzczMjMxMzMxNDc1NTE5.Xz2pcg.8Sr1SDtIjSXLEh45bxtUT2nTJPg")