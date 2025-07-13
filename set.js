/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENwRXVMS0ZRSHBvUzNwaFJTR2lPdU9ZUndOaURpd2J6SDIrcTVVbGprbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHdCdHFDaEh5aVR0d1E5WVlMQzhxQVRxMFIrZ3RCQjdla1N2NE9pL0pURT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQ3gvZEdZenFSaXI4Zmp3bEFFRFU5UFRJQm9YRldyUjUwd3RSVXB3bEhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBUGR4a2k1aTdSV0hSUjE1YXZFaU5QbWhPTnNJTXAwaGFvRFhGSCtyNlhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlIMU4vK282SmlyS1dYUDM4ZFpxVGl2SVc5RnB6aWlZcFJqaVVOQnMyRTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdhSkJ5YUdGWlJYUHFGVHVFcDRQaE1SM0tpME5yZm55bHViYUZnbWNmeUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk5GY1JDSHJtRjJpczhtNnUzSXFSTEpzV3NhYWJlZFhtZmVPWkdoNzNIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWNJeFF5ajNnRERPNmd6ejh0alZlYStDbUIyL05FNFlDQ0lYRDN3aG1Sbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IngrYld2RFRBNHRySkFiZVE2RXRrV1R1anY0TE40ZlVUS1BzY2Z6Tnhjdlp3ZVdxeHlhd2hod0s5cU1XRS94RlRGYkY3dGc4OHFMUHlqcWVrcHhTL2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTczLCJhZHZTZWNyZXRLZXkiOiJaNFNyUzZ3dGlVVnBUZ1FXWG0yVXZhZzF6Tnk4ZDIvVUlyNG9vMG5vOFNRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjM4NjkyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4Q0VCNTFGMzk3ODVBMEQyMjc3OTk4MzNCQ0M5MEY2NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUyMzc4NTUyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQxMTIzODY5MjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkRBODhBQTQ4MDA1MThFNEUyOThBOUEyN0VDNDNDRjUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MjM3ODU1M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiSDYyQTIyTlIiLCJtZSI6eyJpZCI6IjI1NDExMjM4NjkyMTo5NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ0b3BuZXQiLCJsaWQiOiIxMzE5MTE2MzI1ODA4Mzc6OTZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNK09oWDBRcDluTXd3WVlCU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJJUTg5OU8wd1NHUXVZQ1hMZDFZSHZ1SFZVeTJIZjZDREVKS0FKQy9yWURvPSIsImFjY291bnRTaWduYXR1cmUiOiI2Q25mSE8rRU5qSVVCOWNDa0lhd3lSazRxZFJKb3hmeis4SUZKbXBRRmpmd0tBQnl3c2JxaG9kWHgwcWdTSmVoZVJvNk5WZUNHOVZTUGU1K1hub2NEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidDBNSFQ1YzFsOFVtTjV6YVBEdmw0VFRKclh6T0dheU9GZXVvUm1YSXlGZzlSNm9VTy9hcGNJSUNtL1RBOHJtUmgrR24vblhZcit0cDdvSFVEODZPaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQxMTIzODY5MjE6OTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU0VQUGZUdE1FaGtMbUFseTNkV0I3N2gxVk10aDMrZ2d4Q1NnQ1F2NjJBNiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyMzc4NTQ5LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU8xMSJ9';
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
