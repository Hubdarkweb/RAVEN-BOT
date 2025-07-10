/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk1JZ3Nwd25JMGNpOVBsaHgzZ1U2b3YyN3Z1eGI4VmduaFRpci9BczZuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3c5ZXY4NXcvRW1tSElGd3Bsak8xZEpldWlZN3lCM3BrQURBcHNOYkJGRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTEYwcW9SYS8wVS9USG90SDNCRDlrYlZrUUlBdTRYU1J1TllNOHRPUGxNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwUmZWZVpscVRtaDJrSSs4NTlCT0svY2lzQS9SbmJKR056Ymg1WkI5NURNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNQRWMvNmFlMURCZ3pvUS9RQy93ajRyMll1T3JFYjducGVvUnJEeVZFVk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImF2SWFQdTg2ZktTV0lqYjFNYmFFNjNGVXhYUVl4UytNaG9oelRhdThwRTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU93UXF2OVo4MzRwK2xOUGhWS0pnbHl4eHZxTG5MNWp2QlBRaU4vUFFVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2VBQmN3SjJJampaM1ZMUWFaNFhkWTEwb3dtK3RrNDJlUVZ4aFNQNFZCMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpKanJyVG1JNVVvTWpQMy9TamhMV0tWNWtWeUpGYkhCdSthRWpNNm9mY1VuTkNtVjFSekVhOTVvSnVpZVd2R1B0MWI0NGhSTklpWmJPL0VqMk9YVmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYyLCJhZHZTZWNyZXRLZXkiOiJqQU1ib1BBUStmWXM4Yml0cnR2UldGaC81cGtxTTJJRExGTE9SVmVlYVd3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjM4NjkyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1Qjg5NEM5ODIwNDU2OUMxRjNCOTA0QjI4NTJENTc0NiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUyMTMwMzIzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQxMTIzODY5MjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUVGNURERDMxMTZBMkI4MzM4MTM5QTJGNTAyQTA2ODMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MjEzMDMyNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRjJSRUZXTDIiLCJtZSI6eyJpZCI6IjI1NDExMjM4NjkyMTo5M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ0b3BuZXQiLCJsaWQiOiIxMzE5MTE2MzI1ODA4Mzc6OTNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNK09oWDBRZ3NhOXd3WVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJJUTg5OU8wd1NHUXVZQ1hMZDFZSHZ1SFZVeTJIZjZDREVKS0FKQy9yWURvPSIsImFjY291bnRTaWduYXR1cmUiOiJUT3QvMXUzTENkNTFkY1VnMGhXYThQR0FxSkpzeEJWWjIxeDRIdm1GdHlMZ2FIWWVyQTRNNFN1Zlc3NGw0ZVhkTjZZSytQdk85ZnV5OEZoUDJZcktEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSkREL1NGeFhOUFRGbU9VbUw3WktlUmFvZ2dBNmE4WHJCbExHaWRFWmdBRXpSOURqcXJQQXg0b1pLbG1HS0p2Qzh5SVcybVhsR3kyTXpiSDFJNjh4aUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQxMTIzODY5MjE6OTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU0VQUGZUdE1FaGtMbUFseTNkV0I3N2gxVk10aDMrZ2d4Q1NnQ1F2NjJBNiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyMTMwMzE5LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU8xMCJ9';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝗥𝗔𝗩𝗘𝗡';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254112386921';
const owner = dev.split(",");
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/duv8ac.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 8080;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, owner, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
