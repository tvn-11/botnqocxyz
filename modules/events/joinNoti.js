module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "HĐGN",//Update by nhathoang
  description: "Thông báo Bot hoặc người dùng vào nhóm có random gif/ảnh/video",
  dependencies: {
    "fs-extra": "",
    "path": "",
    "pidusage": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "joinGif");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "cache", "joinGif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users }) {
  const { join } = global.nodemodule["path"];
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
     api.sendMessage("[ 𝗞𝗜𝗘̂̉𝗠 𝗗𝗨𝗬𝗘̣̂𝗧 ] - Tiến hành kiểm tra danh sách phê duyệt...", threadID, () => {
  setTimeout(function(){
       if (!(JSON.parse(require("fs-extra").readFileSync(__dirname + "/../commands/cache/approvedThreads.json"))).find(n => n == threadID)) api.sendMessage(`➝ ${event.logMessageBody}\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝗞𝗘̂́𝗧 𝗡𝗢̂́𝗜 𝗧𝗛𝗔̂́𝗧 𝗕𝗔̣𝗜\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n➝ Nhóm bạn chưa được duyệt để gửi yêu cầu ` + global.config.PREFIX + `duyetbox\n➝ Hiện tại mình đang có ${client.commands.size} lệnh có thể sử dụng được.`, threadID)
else api.sendMessage(`➝ ${event.logMessageBody}\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝗞𝗘̂́𝗧 𝗡𝗢̂́𝗜 𝗧𝗛𝗔̀𝗡𝗛 𝗖𝗢̂𝗡𝗚\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n➝ Hiện tại mình đang có ${client.commands.size} lệnh có thể sử dụng được.\n➝ Prefix hiện tại khả dụng là: ` + global.config.PREFIX + `\n➝ thả cảm xúc ❤️ bot sẽ tự động gỡ tin nhắn `, threadID)
     }, 5000);
   })
  }
  else {
    try {
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");	
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};const path = join(__dirname, "cache", "joinGif");
            const pathGif = join(path, `${threadID}.gif`);

            var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;

            for (id in event.logMessageData.addedParticipants) {
          const userName = event.logMessageData.addedParticipants[id].fullName;    iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
              nameArray.push(userName);
              mentions.push({ tag: userName, id: event.senderID });
              memLength.push(participantIDs.length - i++);
              console.log(userName)
            }
            memLength.sort((a, b) => a - b);		
          (typeof threadData.customJoin == "undefined") ? msg = `=== [ ${event.logMessageBody} ] ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝐇𝐞𝐥𝐥𝐨 𝐗𝐢𝐧 𝐂𝐡𝐚̀𝐨 Cục Cưng{type} {name} 🖤\n𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐭𝐡𝐞 𝐁𝐨𝐱 {threadName}!\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n→ [🌐] 𝐋𝐢𝐧𝐤 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 :\nhttps://www.facebook.com/{iduser}\n[👤] {type} 𝐥𝐚̀ 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐭𝐡𝐮̛́ {soThanhVien} 𝐂𝐮̉𝐚 𝐛𝐨𝐱 𝐜𝐡𝐚𝐭\n→ [🎀] 𝐁𝐚̣𝐧 đ𝐮̛𝐨̛̣𝐜 𝐭𝐡𝐞̂𝐦 𝐛𝐨̛̉𝐢: {author}\n━━━━━━━━━━━━━━━━━━\n→ 𝐇𝐚̃𝐲 𝐜𝐡𝐚̆𝐦 𝐜𝐡𝐢̉ 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 đ𝐞̂̉ 𝐭𝐫𝐚́𝐧𝐡 𝐛𝐢̣ đ𝐚́ 🍒\n→ [⏰️] 𝗧𝗵𝗼̛̀𝗶 𝗚𝗶𝗮𝗻 𝗩𝗮̀𝗼 𝗡𝗵𝗼́𝗺: [ {time} ]`: msg = threadData.customJoin;
            var getData = await Users.getData(event.author)
      var nameAuthor = typeof getData.name == "undefined" ? "Người dùng tự vào" : getData.name
            msg = msg
            .replace(/\{iduser}/g, iduser.join(', '))
            .replace(/\{name}/g, nameArray.join(', '))
            .replace(/\{type}/g, (memLength.length > 1) ?  '𝐂𝐚́𝐜 𝐁𝐞́' : '𝐁𝐞́')
            .replace(/\{soThanhVien}/g, memLength.join(', '))
            .replace(/\{threadName}/g, threadName)
            .replace(/\{author}/g, nameAuthor)
            .replace(/\{time}/g, time)
            .replace(/\{id}/g,event.author);

            if (existsSync(path)) mkdirSync(path, { recursive: true });

            const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

            if (existsSync(pathGif)) formPush = { body: msg, attachment: (await global.nodemodule["axios"]({
      url: (await global.nodemodule["axios"]('https://sumiproject.io.vn/video/videogai')).data.url,
      method: "GET",
      responseType: "stream"
      })).data }
            else if (randomPath.length != 0) {
              const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);formPush = { body: msg, attachment: (await global.nodemodule["axios"]({
              url: (await global.nodemodule["axios"]('https://endurable-ambiguous-corleggy.glitch.me/vdcosplayv2')).data.url,
              method: "GET",
              responseType: "stream"
              })).data }
                    }
                    else formPush = { body: msg, attachment: (await global.nodemodule["axios"]({
              url: (await global.nodemodule["axios"]('https://endurable-ambiguous-corleggy.glitch.me/vdcosplayv2')).data.url,
              method: "GET",
              responseType: "stream"
              })).data }

                    return api.sendMessage(formPush, threadID);
                  } catch (e) { return console.log(e) };
                }
                }