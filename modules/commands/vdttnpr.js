module.exports.config = { 

  name: "toctoc", 

  version: "1.0.1", 

  hasPermssion: 0, 

  credits: "Tú Toàn", 

  description: "", 

  commandCategory: "no prefix", 

  usages: "", 

  cooldowns: 0, 

  denpendencies: { 

    "fs-extra": "", 

    "request": "" 

  } 

}; 



module.exports.handleEvent = async ({ 

  event, 

  api, 

  Users 

}) => { 

  const fs = global.nodemodule["fs-extra"]; 

  var { 

    threadID, 

    messageID, 

    body, 

    senderID 

  } = event; 

  const thread = global.data.threadData.get(threadID) || {}; 

  if (typeof thread["Tiktok"] !== "undefined" && thread["tiktok"] == false) return; 



  let name = await Users.getNameUser(event.senderID); 

  if (senderID == api.getCurrentUserID()) return; 



  function out(data) { 

    api.sendMessage(data, threadID, messageID) 

  } 

  //trả lời 

  var msg = { 

    body: `📸==== [ 𝐓𝐈𝐊𝐓𝐎𝐊 ] ====📸\n━━━━━━━━━━━━━━\n`, 

    attachment: (await global.nodemodule["axios"]({ 

      url: (await global.nodemodule["axios"]('https://sumiproject.io.vn/video/videogai')).data.url, 

      method: "GET", 

      responseType: "stream" 

    })).data 

  } 

  // Gọi bot 

  var arr = ["tiktok"]; 

  arr.forEach(i => { 

    let str = i[0].toUpperCase() + i.slice(1); 

    if (body === i.toUpperCase() | body === i | str === body) return out(msg) 

  }); 

}; 



module.exports.languages = { 

  "vi": { 

    "on": "Bật", 

    "off": "Tắt", 

    "successText": "done", 

  }, 

  "en": { 

    "on": "on", 

    "off": "off", 

    "successText": "done", 

  } 

} 



module.exports.run = async function({ 

  api, 

  event, 

  Threads, 

  getText 

}) { 

  const { 

    threadID, 

    messageID 

  } = event; 

  let data = (await Threads.getData(threadID)).data; 



  if (typeof data["toctoc"] == "undefined" || data["toctoc"] == true) data["toctoc"] = false; 

  else data["toctoc"] = true; 



  await Threads.setData(threadID, { 

    data 

  }); 

  global.data.threadData.set(threadID, data); 

  return api.sendMessage(`${(data["toctoc"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID); 

}
