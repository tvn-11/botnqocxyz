module.exports.config = {
  name: "cosplay",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "",
  commandCategory: "no prefix",
  usages: "",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
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
  if (event.body.indexOf("vdcos")==0 || (event.body.indexOf("Cosplay")==0) || event.body.indexOf("cosplay")==0 ||
event.body.indexOf("cos")==0 ||
event.body.indexOf("Vdcos")==0 ||
event.body.indexOf("Cosplay")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];

    api.sendMessage(`=== 『 𝐍𝐠𝐨̣𝐜 𝐇𝐢𝐞̂́𝐮 ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n💽| 𝐑𝐚𝐦𝐝𝐨𝐦 𝐕𝐢𝐝𝐞𝐨 𝐜𝐨𝐬𝐩𝐥𝐚𝐲 :\n𝐕𝐢𝐝𝐞𝐨 𝐬𝐞̃ đ𝐮̛𝐨̛̣𝐜 𝐠𝐮̛̉𝐢 𝐬𝐚𝐮 𝐯𝐚̀𝐢 𝐩𝐡𝐮́𝐭/𝐠𝐢𝐚̂𝐲.\n𝘁𝗶𝗺𝗲: ${thu} ${gio}`, event.threadID, event.messageID);

    var link = [        
      "https://i.imgur.com/iCJkgOk.mp4",
      "https://i.imgur.com/MxtFaRL.mp4",
      "https://i.imgur.com/L5nFP9o.mp4",
      "https://i.imgur.com/RxNBTGl.mp4",
      "https://i.imgur.com/cpJUFM6.mp4",
      "https://i.imgur.com/83ZLbq4.mp4",
      "https://i.imgur.com/N8jBv8N.mp4",
      "https://i.imgur.com/73PKwGB.mp4",
      "https://i.imgur.com/SjreHKM.mp4",
      "https://i.imgur.com/hlINZgL.mp4",
      "https://i.imgur.com/6nmFqQY.mp4",
      "https://i.imgur.com/sVx1sEb.mp4",
      "https://i.imgur.com/Ov7LyRp.mp4",
      "https://i.imgur.com/ztn02IT.mp4",
      "https://i.imgur.com/Lm4qzoJ.mp4",
      "https://i.imgur.com/8mr7MuX.mp4",
      "https://i.imgur.com/sM3PQB0.mp4",
      "https://i.imgur.com/mPjdoVY.mp4",
      "https://i.imgur.com/SeMA6Rm.mp4",
      "https://i.imgur.com/10SLnvu.mp4",
      "https://i.imgur.com/yZkh3Az.mp4",
      "https://i.imgur.com/5j078Vp.mp4",
      "https://i.imgur.com/tXV6RTL.mp4",
      "https://i.imgur.com/QgzXvyx.mp4",
      "https://i.imgur.com/Q3zGHoV.mp4",
      "https://i.imgur.com/zMv3yUu.mp4",
      "https://i.imgur.com/NgJrfOe.mp4",
      "https://i.imgur.com/L4iwEwD.mp4",
      "https://i.imgur.com/a4bkODh.mp4",
      "https://i.imgur.com/pAvEyqW.mp4",
      "https://i.imgur.com/OjNFYzx.mp4",
      "https://i.imgur.com/KBwQylS.mp4",
      "https://i.imgur.com/uDvL7N9.mp4",
      "https://i.imgur.com/ExgKNAX.mp4",
      "https://i.imgur.com/IN8HXBt.mp4",
      "https://i.imgur.com/osM3eWD.mp4",
      "https://i.imgur.com/cOQyt6k.mp4",
      "https://i.imgur.com/vmNLA5M.mp4",
      "https://i.imgur.com/oJQ0BQF.mp4",
      "https://i.imgur.com/0SQnk77.mp4",
      "https://i.imgur.com/0YFQAey.mp4",
      "https://i.imgur.com/n8kL9uI.mp4",
      "https://i.imgur.com/mjYaqqP.mp4",
      "https://i.imgur.com/OaabY1P.mp4",
      "https://i.imgur.com/6g8IMpc.mp4",
      "https://i.imgur.com/3DZofkA.mp4",
      "https://i.imgur.com/9HeLNue.mp4",
      "https://i.imgur.com/Povo7aG.mp4",
      "https://i.imgur.com/3OSRb1N.mp4",
      "https://i.imgur.com/hF716fC.mp4",
      "https://i.imgur.com/FdOpSWr.mp4",
      "https://i.imgur.com/ANDGPv4.mp4",
      "https://i.imgur.com/VlsYtvA.mp4",
      "https://i.imgur.com/stcqzUk.mp4",
      "https://i.imgur.com/DU0xNJ5.mp4",
      "https://i.imgur.com/Bqx2xGM.mp4",
      "https://i.imgur.com/kxih52q.mp4",
      "https://i.imgur.com/SH08EvT.mp4",
      "https://i.imgur.com/2VyifK2.mp4",
      "https://i.imgur.com/cMotfW4.mp4",
      "https://i.imgur.com/hMsIAvn.mp4",
      "https://i.imgur.com/JUG7s5Q.mp4",
      "https://i.imgur.com/RymLgq8.mp4",
      "https://i.imgur.com/vEcFQwc.mp4",
      "https://i.imgur.com/YdAf6O3.mp4",
      "https://i.imgur.com/mX8kJl6.mp4",
      "https://i.imgur.com/IJUnurS.mp4",
      "https://i.imgur.com/HmcPhLC.mp4",
      "https://i.imgur.com/1tgx5tI.mp4",
      "https://i.imgur.com/0tnC4LM.mp4",
      "https://i.imgur.com/1mSpgCN.mp4",
      "https://i.imgur.com/k3NeFB9.mp4",
     "https://i.imgur.com/qK1hoD5.mp4",
      "https://i.imgur.com/mq6brRE.mp4",
      "https://i.imgur.com/0Rwb0w1.mp4",
      "https://i.imgur.com/t8XxwRF.mp4",
      "https://i.imgur.com/gvjAKox.mp4",
      "https://i.imgur.com/BuA4QYr.mp4",
      "https://i.imgur.com/y2aK7rX.mp4",
      "https://i.imgur.com/z0VLtIM.mp4",
      "https://i.imgur.com/c3wieTA.mp4",
      "https://i.imgur.com/O320FUs.mp4",
      "https://i.imgur.com/1sFSDkv.mp4",
      "https://i.imgur.com/namsDPk.mp4",
      "https://i.imgur.com/842S5AA.mp4",
      "https://i.imgur.com/t3oIe9s.mp4",
      "https://i.imgur.com/GzD1xIU.mp4",
      "https://i.imgur.com/jRmwCwc.mp4",
      "https://i.imgur.com/EQSRSLo.mp4",
      ];
     var callback = () => api.sendMessage({body:`=== 『 𝐍𝐠𝐨̣𝐜 𝐇𝐢𝐞̂́𝐮 ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝘃𝗶𝗱𝗲𝗼 𝗰𝗼𝘀𝗽𝗹𝗮𝘆 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆 🐰\n𝐜𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐱𝐞𝐦 𝐯𝐢𝐝𝐞𝐨 𝐯𝐮𝐢 𝐯𝐞̉\n𝘁𝗶𝗺𝗲: ${thu} ${gio}`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };