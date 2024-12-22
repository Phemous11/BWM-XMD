const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA5VV246jOBT8F7+SHkIgXCK1tEAIgdwgF5LOah4cMOBwbWOSQKv/fUXSo25pNbO9b5ax65Sr6hzeQF7gCs1QA0ZvoCT4AinqlrQpERgBrQ5DREAPBJBCMAKRyW5osUPMLizGxlpKEkt+tRZIiurbfmCLy3rqzRB3UlLrGbz3QFmfUuz/AVAxyFYPoxS5klHq17FVTadZqM/U9FBUGrPPPYE95q/rA+4AO0SICc4jo4xRhghMZ6hxICbfo2/Ok4OsTBP+VVNlw3XyaXvbsgrnO5u9/pozwdUMDS8M8ET+Hn1MiakKpOZh4hGXsmiYLyRxlvaTxXxY918VsS1SBeotbzzoVzjKUWAFKKeYNt/W3VTnU+E0neXp9oQqchGKfXZg+t7Ulbgz1eAYTfUiZJWaM75H3FPnDj2s7UhL+Iq1GvU88JdLbb624HBvHvv+8eZmfVlR1tFX4g75lZXk/+h+XfQlAk9bO4iJLA+XssoMWJlZElicbsJgPEw1fcjXUuQtvkdfXy3Ias04O3fGS4wzXZgL9soorSLyhcuSnS9mu53GrdnN7pM+pDX5E8u+nHkvkuPHoqFtJnjccu4g8fyx7LpsmZDbWlt6eXGrjroiXsu83o5LP+VjNa6F1UD3jvbBDFmCfJ5XpHpiussjzWP1+f6iBDVWAEbcew8QFOGKEkhxkd/3OLkHYHDZIJ8gepcXOI0n4v4RvVQZk62VRr2ZsmsU8n5sUs2vl61iV0lgXQLDfQY9UJLCR1WFgimuaEGaBaoqGKEKjP7+2QM5utGHcV05nuuBEJOK7vK6TAsY/HL110fo+0Wd002T+3q3QASM+p/biFKcR1WnY51D4sf4gvQY0gqMQphW6L0HAnTBPurwQGSX5kt509e4qTGxHL8d4MTtKMdF/jgiBuKAE33hSQi48EkYKoMnRQq5pxMvBooEhZPMiaAH8EfPdHd+a+GWhYLKvPhZfbYdSxPzemJZSG+9hXq34aE9IigAI0pq1AMn6Cd1uS0SlP8Bt/RYea8QpV7CfcadhONGPSYxsmNr8QX34SkYvX3OKb0IOjxDWitLezADPZDdI4i7lw94fshLA0Xh5P5I+qv6ce10hGX5I0e0g/3QvLsQIApxWnXZt/hhI6lzYxXi/FSZpmpEqh6p4NOjX2F/hCmpHI6pLHeeaU7rs1jw0MShDe+iZLzYipdD2xa7lXPed0P73yBgBLLZMLpOG0Svx3TGD2w5IKgNxmdabnTbYirHt3fi0cahgg/S9lae9U22z29xufcvzXqfTVb9DXO6zuWFatnq1Jzn4i6+PnfVHln5WkxXLtXE3J7HsdVqQ+vszoX4UnJSYOd7bdtfbWYH76q/lOeWo/0Ttgy7saeDymO29qKNF7NiP1shzZ+IRs6aQ7Fgh/zsHD3a8D4G0o/xi+8N8vaRrBCj+zTLYefQf3jzNeP9994XiI/x+Jscacf5WAmJbujDaCvzjlBPDvFW8ml/WqqtwRBOlsXJ+Cxw5Qa8v//sgTKFNCxI1v1s7j0DeiCFFVU/u3SLM1RRmJVgxEm8IPMDQZHf/wGbBsBX2wcAAA==",
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Phemous",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Phemous ",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

