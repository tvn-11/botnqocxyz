module.exports.config = {
  name: "vdanimenpr",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "vthien",
  description: "Random video vdanime",
  commandCategory: "Random-mp4",
  usages: "vdanime",
  cooldowns: 10,
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
  if (event.body.indexOf("✓")==0 || (event.body.indexOf("✓")==0) || event.body.indexOf("anime")==0 ||
event.body.indexOf("wibu")==0 ||
event.body.indexOf("waifu")==0 ||
event.body.indexOf("✓")==0 ||
event.body.indexOf("Anime")==0 ||
event.body.indexOf("✓")==0 ||
event.body.indexOf("✓")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/BTVQJQZ.mp4", 
      "https://i.imgur.com/gFQY4bD.mp4", 
      "https://i.imgur.com/GMJsWDR.mp4", 
      "https://i.imgur.com/cLG0KH9.mp4", 
      "https://i.imgur.com/wVoWx5W.mp4", 
      "https://i.imgur.com/g8NZmyC.mp4", 
      "https://i.imgur.com/HxjiyXM.mp4", 
      "https://i.imgur.com/eqtj6MP.mp4", 
      "https://i.imgur.com/jE8JT65.mp4", 
      "https://i.imgur.com/hRqwzoP.mp4", 
      "https://i.imgur.com/bh9QnoR.mp4", 
      "https://i.imgur.com/IXTMK15.mp4", 
      "https://i.imgur.com/MVJ3cV3.mp4", 
      "https://i.imgur.com/CXiukak.mp4", 
      "https://i.imgur.com/6WPyoNt.mp4", 
      "https://i.imgur.com/21Nb7ZA.mp4", 
      "https://i.imgur.com/QgAhGWb.mp4", 
      "https://i.imgur.com/a58Bv6r.mp4", 
      "https://i.imgur.com/8S7IIh9.mp4", 
      "https://i.imgur.com/uJjYQxu.mp4", 
      "https://i.imgur.com/MQFDUQS.mp4", 
      "https://i.imgur.com/52heHUP.mp4", 
      "https://i.imgur.com/uEXAezr.mp4", 
      "https://i.imgur.com/FXNOFhV.mp4", 
      "https://i.imgur.com/Ta4GzEZ.mp4", 
      "https://i.imgur.com/13ux9Ui.mp4", 
      "https://i.imgur.com/d6IBpe6.mp4", 
      "https://i.imgur.com/OKNzdZm.mp4", 
      "https://i.imgur.com/LWSzkFT.mp4", 
      "https://i.imgur.com/lRQjVw2.mp4", 
      "https://i.imgur.com/vkZGkmx.mp4", 
      "https://i.imgur.com/RWEQ9x2.mp4", 
      "https://i.imgur.com/A8qJN9X.mp4", 
      "https://i.imgur.com/u5Rh3zJ.mp4", 
      "https://i.imgur.com/CaPwkoJ.mp4", 
      "https://i.imgur.com/Yi3ne8t.mp4", 
      "https://i.imgur.com/hX7kjT8.mp4", 
      "https://i.imgur.com/zPFy7SU.mp4", 
      "https://i.imgur.com/NtDuvXw.mp4", 
      "https://i.imgur.com/fKFoybA.mp4", 
      "https://i.imgur.com/ajtqP9B.mp4", 
      "https://i.imgur.com/V67msAZ.mp4", 
      "https://i.imgur.com/NTjgLmx.mp4", 
      "https://i.imgur.com/f3qGHN0.mp4", 
      "https://i.imgur.com/ClAqwMx.mp4", 
      "https://i.imgur.com/o0pwA5y.mp4", 
      "https://i.imgur.com/WLDMQID.mp4", 
      "https://i.imgur.com/1fKlUyo.mp4", 
      "https://i.imgur.com/DFzTO2H.mp4", 
      "https://i.imgur.com/YuUJgqj.mp4", 
      "https://i.imgur.com/uoXhb9E.mp4", 
      "https://i.imgur.com/rD5y2oj.mp4", 
      "https://i.imgur.com/ybJN3Bc.mp4", 
      "https://i.imgur.com/bZJHYAZ.mp4", 
      "https://i.imgur.com/pl6oyg4.mp4", 
      "https://i.imgur.com/St4ttN1.mp4", 
      "https://i.imgur.com/XrWc6U9.mp4", 
      "https://i.imgur.com/4GziJca.mp4", 
      "https://i.imgur.com/ieR4pGB.mp4", 
      "https://i.imgur.com/o2jjyFz.mp4", 
      "https://i.imgur.com/X6pMbo7.mp4", 
      "https://i.imgur.com/2GwgtB8.mp4", 
      "https://i.imgur.com/ltai3w1.mp4", 
      "https://i.imgur.com/NW1qosQ.mp4", 
      "https://i.imgur.com/vXFAPnA.mp4", 
      "https://i.imgur.com/Xgf8Wj6.mp4", 
      "https://i.imgur.com/c76D4E4.mp4", 
      "https://i.imgur.com/8D4DrWs.mp4", 
      "https://i.imgur.com/eIZ3Ai1.mp4", 
      "https://i.imgur.com/n5aicUO.mp4", 
      "https://i.imgur.com/G3Dm3uC.mp4", 
      "https://i.imgur.com/tdufixl.mp4", 
      "https://i.imgur.com/ogh012k.mp4", 
      "https://i.imgur.com/Cananyw.mp4", 
      "https://i.imgur.com/2AqpSg1.mp4", 
      "https://i.imgur.com/9o7DCz8.mp4", 
      "https://i.imgur.com/g3a114Y.mp4", 
      "https://i.imgur.com/uQ7tnr2.mp4", 
      "https://i.imgur.com/czKw04s.mp4", 
      "https://i.imgur.com/2BO8RaM.mp4", 
      "https://i.imgur.com/nhtAcpS.mp4", 
      "https://i.imgur.com/D26RKSr.mp4", 
      "https://i.imgur.com/mrQuBcy.mp4", 
      "https://i.imgur.com/9mFar3G.mp4", 
      "https://i.imgur.com/EMW344F.mp4", 
      "https://i.imgur.com/3ZCgbWN.mp4", 
      "https://i.imgur.com/Au51znd.mp4", 
      "https://i.imgur.com/EmWlOGV.mp4", 
      "https://i.imgur.com/WIl3SzD.mp4", 
      "https://i.imgur.com/RZXS1vS.mp4", 
      "https://i.imgur.com/8NJqjEK.mp4", 
      "https://i.imgur.com/8Uw1oM0.mp4", 
      "https://i.imgur.com/3ixfAA0.mp4", 
      "https://i.imgur.com/xY50bzv.mp4", 
      "https://i.imgur.com/tJ1DucE.mp4", 
      "https://i.imgur.com/NvWo0Bb.mp4", 
      "https://i.imgur.com/YfFluUV.mp4",
      "https://i.imgur.com/kWUqS45.mp4", 
      "https://i.imgur.com/fAiCCDi.mp4", 
      "https://i.imgur.com/MXU1cQv.mp4", 
      "https://i.imgur.com/xIjgPQ8.mp4", 
      "https://i.imgur.com/CvPQMOa.mp4", 
      "https://i.imgur.com/bQHf1ZV.mp4", 
      "https://i.imgur.com/d0lfUXW.mp4", 
      "https://i.imgur.com/v6lkMjr.mp4", 
      "https://i.imgur.com/Y6vCwSs.mp4", 
      "https://i.imgur.com/JTwYcdw.mp4", 
      "https://i.imgur.com/pVyBi1k.mp4", 
      "https://i.imgur.com/1RUIYnY.mp4", 
      "https://i.imgur.com/TUK26ie.mp4", 
      "https://i.imgur.com/sYZA32v.mp4", 
      "https://i.imgur.com/fvzhJCS.mp4", 
      "https://i.imgur.com/sYZA32v.mp4", 
      "https://i.imgur.com/Hk8yjot.mp4", 
      "https://i.imgur.com/v8IU2Qw.mp4", 
      "https://i.imgur.com/Hk8yjot.mp4", 
      "https://i.imgur.com/bXSIwdn.mp4", 
      "https://i.imgur.com/kwnlNxI.mp4", 
      "https://i.imgur.com/J1gcIXy.mp4", 
      "https://i.imgur.com/SypYmS4.mp4", 
      "https://i.imgur.com/XAc0mXO.mp4", 
      "https://i.imgur.com/G3WKDw7.mp4", 
      "https://i.imgur.com/YfujOiP.mp4", 
      "https://i.imgur.com/thAtfDV.mp4", 
      "https://i.imgur.com/AlWejfN.mp4", 
      "https://i.imgur.com/mzH6Ha9.mp4", 
      "https://i.imgur.com/bn2hQCS.mp4", 
      "https://i.imgur.com/yqaKc8t.mp4", 
      "https://i.imgur.com/HrWEG9U.mp4", 
      "https://i.imgur.com/SypYmS4.mp4", 
      "https://i.imgur.com/WPuGxEA.mp4", 
      "https://i.imgur.com/mzH6Ha9.mp4", 
      "https://i.imgur.com/XAc0mXO.mp4", 
      "https://i.imgur.com/G3WKDw7.mp4", 
      "https://i.imgur.com/Xa7OEq0.mp4", 
      "https://i.imgur.com/z7qPnp6.mp4", 
      "https://i.imgur.com/z7qPnp6.mp4", 
      "https://i.imgur.com/CLYbf19.mp4", 
      "https://i.imgur.com/tWVCLIN.mp4", 
      "https://i.imgur.com/znUp6DU.mp4", 
      "https://i.imgur.com/CLYbf19.mp4", 
      "https://i.imgur.com/oEYtQSq.mp4", 
      "https://i.imgur.com/gonHQTB.mp4", 
      "https://i.imgur.com/C5SWbPl.mp4", 
      "https://i.imgur.com/wgaa4bA.mp4", 
      "https://i.imgur.com/eTQrJWW.mp4", 
      "https://i.imgur.com/K1rIOTU.mp4", 
      "https://i.imgur.com/K1rIOTU.mp4", 
      "https://i.imgur.com/zwdcP1d.mp4", 
      "https://i.imgur.com/0jWoM6t.mp4", 
      "https://i.imgur.com/1u1Ef04.mp4", 
      "https://i.imgur.com/wn1PDeL.mp4", 
      "https://i.imgur.com/zTD9Imf.mp4",
      "https://i.imgur.com/jImOSVn.mp4", 
      "https://i.imgur.com/sG9wuSR.mp4", 
      "https://i.imgur.com/I6ViS8W.mp4", 
      "https://i.imgur.com/BIgbVfl.mp4", 
      "https://i.imgur.com/VYLKHlY.mp4", 
      "https://i.imgur.com/BIgbVfl.mp4", 
      "https://i.imgur.com/HvBxe7s.mp4", 
      "https://i.imgur.com/Jz9sEFH.mp4", 
      "https://i.imgur.com/jVqkdjZ.mp4", 
      "https://i.imgur.com/WN068d2.mp4", 
      "https://i.imgur.com/0sdC7tE.mp4", 
      "https://i.imgur.com/VIVwF1i.mp4", 
      "https://i.imgur.com/5XbknDH.mp4"
         ];
     var callback = () => api.sendMessage({body:`=== [ 𝗩𝗜𝗗𝗘𝗢 𝗔𝗡𝗜𝗠𝗘 ] ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝗵𝗲𝗿𝗲'𝘀 𝘆𝗼𝘂𝗿 𝘃𝗶𝗱𝗲𝗼 𝗮𝗻𝗶𝗺𝗲❤️\n𝗔𝗗𝗠𝗜𝗡: 𝗖𝗔𝗢 𝗡𝗚𝗢𝗖 𝗛𝗜𝗘𝗨\n𝘁𝗶𝗺𝗲: ${thu} ${gio}`,attachment: fs.createReadStream(__dirname + "/cache/vd.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/vd.mp4"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/vd.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };