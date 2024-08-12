module.exports.config = {
 name: "vd8dnpr",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "huy",
 description: "Random video",
 commandCategory: "Random-mp4",
 usages: "api",
 cooldowns: 5,
 dependencies: {
 "request":"",
 "fs-extra":"",
 "axios":""
 }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
    if (thu == 'Sunday') thu = 'Chủ Nhật'
    if (thu == 'Monday') thu = 'Thứ 2'
      if ( thu == 'Tuesday') thu = 'Thứ 3'
    if ( thu == 'Wednesday') thu = 'Thứ 4'
    if ( thu == 'Thursday') thu = 'Thứ 5'
    if ( thu == 'Friday') thu = 'Thứ 6'
    if ( thu == 'Saturday') thu = 'Thứ 7'
  if (event.body.indexOf("8d")==0 || (event.body.indexOf("8D")==0) || event.body.indexOf("8")==0) {
 const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
 var link = [
"https://i.imgur.com/qn02HIC.mp4",
"https://i.imgur.com/pm4XLLC.mp4",
"https://i.imgur.com/hDPUH6j.mp4",
"https://i.imgur.com/myK6Fhh.mp4",
"https://i.imgur.com/wN8LdEN.mp4",
"https://i.imgur.com/5JZMEHf.mp4",
"https://i.imgur.com/FCUsXPP.mp4",
"https://i.imgur.com/rHGznNs.mp4",
"https://i.imgur.com/kHRSgN7.mp4",
"https://i.imgur.com/C7Ckvn9.mp4",
"https://i.imgur.com/NLW9EU1.mp4",
"https://i.imgur.com/EmCCKuU.mp4",
"https://i.imgur.com/i2PDfdy.mp4",
"https://i.imgur.com/SJ7Gniw.mp4",
"https://i.imgur.com/y5C0vva.mp4",
"https://i.imgur.com/v3T7hnP.mp4",
"https://i.imgur.com/dcehfwS.mp4",
 ];
 var callback = () => api.sendMessage({body:`==== [ 𝗠𝗨𝗦𝗜𝗖 8𝗗 ] ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝘁𝗵𝗶𝘀 𝗶𝘀 𝘆𝗼𝘂𝗿 8𝗱 𝗺𝘂𝘀𝗶𝗰🐧\n➢『💧』𝐀𝐝𝐦𝐢𝐧 𝐮𝐩𝐝𝐚𝐭𝐞: 𝑻𝑶𝑵𝑮 𝑽𝑨𝑵 𝑵𝑮𝑶𝑪 𝑶𝑭𝑭𝑰𝑪𝑰𝑨𝑳 𓆏\n𝘁𝗶𝗺𝗲: ${thu} ${gio}`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID); 
 return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
 }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
 };