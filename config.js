module.exports = {
    bot: {
        token: process.env.TOKEN,
        prefix: ".",
        owners: ["593536295507329049"],// OWNERS ID
        mongourl: "mongodb+srv://Snzy:neji@webupt.vhkov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

    },

    website: {
        callback: "https://Bot-List.tnhazem.repl.co/callback",
        secret: "kEB5ErJlL0s90TRnVC1z8x9UOrbJRe_g",
        clientID: "919159349237121024",
        tags: [ "Moderation", "Fun", "Minecraft","Economy","Guard","NSFW","Anime","Invite","Music","Logging", "Web Dashboard", "Reddit", "Youtube", "Twitch", "Crypto", "Leveling", "Game", "Roleplay", "Utility", "Turkish" ]    
    },

    server: {
        id: "917854647505518652",// SERVER ID
        roles: {
            yonetici: "917862080026148975", //ADMIN ROLE ID
            moderator: "917862080026148975",// MOD ROLE ID 
            profile: {
                booster: "917862080026148975",// BOOSTER ROLE ID 
                sponsor: "917862080026148975",// SPONSOR ROLE ID
                supporter: "917862080026148975", //SUPORTER ROLE ID
                partnerRole: "917862080026148975" //partnerRole ID
            },
            codeshare: {
                javascript: "JS",
                html: "HTML",
                altyapilar: "ALTYAPILAR",
                bdfd: "BDFD",
                besdavet: "BESDAVET",
                ondavet: "ONDAVET",
                onbesdavet: "ONBESDAVET",
                yirmidavet: "YIRMIDAVET"
            },
            botlist: {
                developer: "917862080026148975",// DEV ROLE ID 
                certified_developer: "917862080026148975",// ROLE ID 
                bot: "917862080026148975", //ROLE BOTS YOUR SERVER ID
                certified_bot: "917862080026148975" // ROLE ID 
            }
        },
        channels: { // PUT ID channels LOGS
            codelog: "947763080622923818",
            login: "947763080622923818",
            webstatus: "947763080622923818",
            uptimelog: "947763080622923818",
            botlog: "947763080622923818",
            votes: "947763080622923818"
        }
    }


}
