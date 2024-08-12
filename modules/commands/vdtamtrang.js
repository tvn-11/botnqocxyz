const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "vdtamtrang",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NTK",
  description: "video ",
  commandCategory: "Video cá nhân",
  usages: "Gaitik",
  cooldowns: 5,
    dependencies: {"request": "",
  "fs": "",
  "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
  var link = [
"https://i.imgur.com/26tBGNz.mp4",
"https://i.imgur.com/bKahRyR.mp4",
"https://i.imgur.com/nsAeBu9.mp4",
"https://i.imgur.com/YBEqu4T.mp4",
"https://i.imgur.com/Zq5iniZ.mp4",
"https://i.imgur.com/eAue5PQ.mp4",
"https://i.imgur.com/p0uF1JZ.mp4",
"https://i.imgur.com/c9d9k8V.mp4",
"https://i.imgur.com/Q7k7En2.mp4",
"https://i.imgur.com/17QK9Ym.mp4",
"https://i.imgur.com/RgXyYf6.mp4",
"https://i.imgur.com/TPCfN2n.mp4",
"https://i.imgur.com/5wFRzh6.mp4",
"https://i.imgur.com/eKg22cS.mp4",
"https://i.imgur.com/jPRR3s6.mp4",
"https://i.imgur.com/LfW7EHr.mp4",
"https://i.imgur.com/zy7sr6N.mp4",
"https://i.imgur.com/jaKWRn4.mp4",
"https://i.imgur.com/92xJwzd.mp4",
"https://i.imgur.com/bVJ4yC4.mp4",
"https://i.imgur.com/7u6af0D.mp4",
"https://i.imgur.com/77oeeE4.mp4",
"https://i.imgur.com/VeJ3zDB.mp4",
"",
"",
"",
"",   
     ];
   var callback = () => api.sendMessage({body:` === [ 𝗩𝗜𝗗𝗘𝗢𝗦 𝗠𝗢𝗢𝗗 ] === \n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝗵𝗲𝗿𝗲'𝘀 𝘆𝗼𝘂𝗿 𝗺𝗼𝗼𝗱 𝘃𝗶𝗱𝗲𝗼 💔\n[🚬] → 𝘁𝗵𝗲 𝘁𝗼𝘁𝗮𝗹 𝗻𝘂𝗺𝗯𝗲𝗿 𝗼𝗳 𝘃𝗶𝗱𝗲𝗼𝘀 𝗰𝘂𝗿𝗿𝗲𝗻𝘁𝗹𝘆 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗼𝗻 𝘁𝗵𝗲 𝗯𝗼𝘁 𝗶𝘀: ${link.length} 🖤🖤`,attachment: fs.createReadStream(__dirname + "/cache/boobs.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "//cache/boobs.mp4"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"//cache/boobs.mp4")).on("close",() => callback());
};