const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "goibot",
  commandCategory: "Không xài lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  var tl = [`=== 『 tvnqocxyz 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝗛𝗲𝗹𝗹𝗼,𝗜 𝗮𝗺 tvnqocxyz 𝗯𝗼𝘁\n𝗳𝗯 𝗵𝗼̂̉ 𝘁𝗿𝗼̛̣ :fb.me/616652161`, `=== 『 tvnqocxyz 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝗥𝗲𝗮𝗱𝘆 𝘁𝗼 𝗿𝗲𝗰𝗲𝗶𝘃𝗲 𝗿𝗲𝗾𝘂𝘀𝘁𝘀 𝗳𝗿𝗼𝗺 𝗮𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝘁𝗼𝗿𝘀\n𝗳𝗯 𝗵𝗼̂̉ 𝘁𝗿𝗼̛̣ :fb.me/616652161`, `=== 『 tvnqocxyz 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝗨𝘀𝗲 /𝗰𝗮𝗹𝗹𝗮𝗱 𝘁𝗼 𝗻𝗼𝘁𝗶𝗳𝘆 𝗮𝗱𝗺𝗶𝗻 tvnqocxyz 𝗮𝗯𝗼𝘂𝘁 𝗯𝗼𝘁 𝗲𝗿𝗿𝗼𝗿𝘀!\n𝗳𝗯 𝗵𝗼̂̉ 𝘁𝗿𝗼̛̣ :fb.me/616652161`, `=== 『 tvnqocxyz 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝗠𝗮𝘆 𝗜 𝗵𝗲𝗹𝗽 𝘆𝗼𝘂?\n𝗳𝗯 𝗵𝗼̂̉ 𝘁𝗿𝗼̛̣ :fb.me/616652161`, `=== 『 tvnqocxyz 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\ntvnqocxyz 𝗯𝗼𝘁 𝘀𝘆𝘀𝘁𝗲𝗺 𝗶𝘀 𝗽𝗹𝗲𝗮𝘀𝗲𝗱 𝘁𝗼 𝘀𝗲𝗿𝘃𝗲 𝘆𝗼𝘂 <3\n𝗳𝗯 𝗵𝗼̂̉ 𝘁𝗿𝗼̛̣ :fb.me/616652161`, `=== 『 tvnqocxyz 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝗜𝗳 𝗼𝗻𝗲 𝗱𝗮𝘆 𝘆𝗼𝘂 𝗰𝗮𝗹𝗹 𝗮𝗻𝗱 𝗜 𝗱𝗼𝗻'𝘁 𝗮𝗻𝘀𝘄𝗲𝗿,𝗶𝘁 𝗺𝗲𝗮𝗻𝘀 𝘁𝗵𝗲 𝗯𝗼𝘁 𝗵𝗮𝘀 𝗹𝗼𝘀𝘁 𝗶𝘀 𝗮𝗰𝗰𝗼𝘂𝗻𝘁\n𝗳𝗯 𝗵𝗼̂̉ 𝘁𝗿𝗼̛̣ :fb.me/616652161`, `=== 『 tvnqocxyz 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝗛𝗲𝗹𝗹𝗼 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲,𝗜'𝗺 𝗮 𝗯𝗼𝘁.𝗠𝗮𝘆 𝗜 𝗵𝗲𝗹𝗽 𝘆𝗼𝘂?\n𝗳𝗯 𝗵𝗼̂̉ 𝘁𝗿𝗼̛̣ :fb.me/616652161`];
  var rand = tl[Math.floor(Math.random() * tl.length)]
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
  if ((event.body.toLowerCase() == "bot ngu")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝐌𝐚̀𝐲 𝐜𝐮̃𝐧𝐠 𝐧𝐠𝐮 𝐤𝐡𝐨̂𝐧𝐠 𝐤𝐞́𝐦 😏\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "bot lon")) {
    return api.sendMessage(`=== 『 tvnqocxyz 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nTao là bot đéo có lồn hay cặc gì nhé 😠\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "bot lỏ")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝙆𝙝𝙤̂𝙣𝙜 𝙨𝙖̀𝙞 𝙙𝙪̛𝙤̛̣𝙘 𝙩𝙝𝙞̀ 𝙘𝙪́𝙘🙂\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "bot chó") || (event.body.toLowerCase() == "bot chó")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nChó nào vừa nói xấu tao đấy, muốn chết hả😠\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "ôi") || (event.body.toLowerCase() == "ôi")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nÔi cái gì lo mà tương tác đi :)\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "ối") || (event.body.toLowerCase() == "ối")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nỐi cái gì biết tương tác ko :)\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "ơi") || (event.body.toLowerCase() == "ơi")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nƠi :)? Ơi gì tương tác hộ con :>>>\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "ỏ") || (event.body.toLowerCase() == "oi")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nỎ con cá thích ỏ ko :>> Tương tác lẹ\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "ừm") || (event.body.toLowerCase() == "um")) {
    return api.sendMessage(`=== 『 tvnqocxyz  』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nỪm :>>> tvnqocxyz cho tốt nhé ><\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "à") || (event.body.toLowerCase() == "à")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nÀ..... c on cá tương tác lẹ :)?\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "ừ") || (event.body.toLowerCase() == "u")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝗨̛̀ 𝗮̀ 𝗯𝗶𝗲̂́𝘁 𝗱𝗮̣ 𝗸𝗵𝗼̂𝗻𝗴? 𝗹𝗮́𝗼 𝗮̀:)))\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "ừa") || (event.body.toLowerCase() == "ua")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝗨̛̀a 𝗮̀ 𝗯𝗶𝗲̂́𝘁 𝗱𝗮̣ 𝗸𝗵𝗼̂𝗻𝗴? 𝗹𝗮́𝗼 𝗮̀ :)))\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "uk") || (event.body.toLowerCase() == "uk")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝗨̛̀ 𝗮̀ 𝗯𝗶𝗲̂́𝘁 𝗱𝗮̣ 𝗸𝗵𝗼̂𝗻𝗴? 𝗹𝗮́𝗼 𝗮̀ :)))\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "mấy giờ rồi bot") || (event.body.toLowerCase() == "may gio roi bot")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝗧𝗶𝗺𝗲: ${gio} ${thu}🖤`, threadID);
  };

  if ((event.body.toLowerCase() == "yêu") || (event.body.toLowerCase() == "yeu")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nCóm tró con cá, yêu đương cái gì, tiền, xe, nhà thì đéo có mà yêu với đương, lo học hành và đi làm kiếm tiền đê yêu sau\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nBất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "đmm bot") || (event.body.toLowerCase() == "dmm bot")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nBất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "chửi cmm") || (event.body.toLowerCase() == "chui cmm")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nBất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "cmm bot") || (event.body.toLowerCase() == "cmm bot")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nChửi cc gì thích đấm nhau ko mà sồn sồn lên thế :)\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "địt") || (event.body.toLowerCase() == "dit")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nĐịt cc thích đụ ko :)\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "địt cc") || (event.body.toLowerCase() == "dit cc")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nÀ mày thích địt à cởi quần ra đụ lẹ nào :)\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nnói , tao còn phải phục vụ các box khác nữa :)\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nHmm... Bot ngại lắm thôi yêu admin của bot nhé :))\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

   if ((event.body.toLowerCase() == "yêu anh") || (event.body.toLowerCase() == "yeu anh")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nAnh cũng yêu em <3\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "chào cậu") || (event.body.toLowerCase() == "chao cau")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nHí chào bạn <3\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "chửi cc") || (event.body.toLowerCase() == "chui cc")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nMatday quá đi bạn à ><, cần tao chỉnh đốn mày lại ko :)\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "cc cút") || (event.body.toLowerCase() == "cc cút")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nSao mày ko cút? Mà bảo tao :) mệt  ghê :>\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "vãi") || (event.body.toLowerCase() == "vai")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nVãi đạn....:)))\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "Alo") || (event.body.toLowerCase() == "alo")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nỪ !! Tương tác hộ tao lẹ đi :)\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "Aloo") || (event.body.toLowerCase() == "aloo")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nỪ !! Tương tác hộ tao lẹ đi :)\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "link") || (event.body.toLowerCase() == "link")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nLink bao nhiêu phút á cho e xem với nào 🤤\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "cuu")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nCứu cc ngu thì chết khôn thì sống cậu chủ bảo tao thế <3\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "gây war à") || (event.body.toLowerCase() == "gay war a")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nWar cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "đi gây war") || (event.body.toLowerCase() == "di gay war")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nWar cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "thích gây war à") || (event.body.toLowerCase() == "thich gay war a")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nWar cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };  

  if ((event.body.toLowerCase() == "hát đi mng") || (event.body.toLowerCase() == "hat di mng")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nThôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "hát đi") || (event.body.toLowerCase() == "hat di")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nThôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };  

  if ((event.body.toLowerCase() == "bot hát đi") || (event.body.toLowerCase() == "bot hat di")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nThôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "hát đi nào") || (event.body.toLowerCase() == "hát đi nào")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nThôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "hat di bot")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nThôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mng") || (event.body.toLowerCase() == "tt đi mng")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n1 là tương tác, 2 là ăn kick :))))\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "tt di nao mng")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n1 là tương tác, 2 là ăn kick :))))\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "con cac") || (event.body.toLowerCase() == "con cac")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nĐm móc ra bố check hàng :)))\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nMày bẩn vừa thôi con lồn :)))\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "lon") || (event.body.toLowerCase() == "lồn")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nMày bẩn vừa thôi con lồn :)))\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
    return api.sendMessage(`===『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nChửi gì đấy con dog :) bố mmày nhịn mày lâu lắm rồi đấy nhá\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nChửi gì đấy con dog :) bố mmày nhịn mày lâu lắm rồi đấy nhá\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nChửi gì đấy con dog :) bố mmày nhịn mày lâu lắm rồi đấy nhá\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "cặc") || (event.body.toLowerCase() == "cặc")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nVăn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "haha")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nmày cười cái choá gì?🙂\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "kkk")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n cười cái choá gì ? 🙂\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nVăn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "cl") || (event.body.toLowerCase() == "cailon")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nVăn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "loz")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nVăn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nVăn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nChửi cc gì đấy sủa lại bố mày nghe nào :) nít ranh mà cứ thích sồn :)\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "lozz") || (event.body.toLowerCase() == "lozz")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nVăn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "clmm") || (event.body.toLowerCase() == "clmm")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nBớt chửi thề cho nên người đi bạn êi :))) ko tao vả chetmemay giờ\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage(`=== 『 tvnqocxyz ✅ 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nÀ ý mày bảo mày là chó á hả sủa đi tao nghe :)\n𝗔𝘁 𝘁𝗶𝗺𝗲: ${thu} ${gio}`, threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }