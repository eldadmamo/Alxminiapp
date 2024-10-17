require('dotenv').config();

const Telegraf = require("telegraf").Telegraf;

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const webAppUrl = process.env.WEB_APP_URL;

const bot = new Telegraf(TOKEN);

bot.on('text', async (ctx) => {
    const chatId = ctx.chat.id;
    const text = ctx.message.text;
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name;
    const message = `Hey, ${userName}! Welcome to Hulemekina!
    
Promote your car No Commission For More info contact us on 0911663121`;

    if (text === '/start') {

        await ctx.reply(message, {
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Start now!", web_app: { url: webAppUrl, web_app_setup_closing_behavior: 'hide' } }],
                    [{ text: "Join Community", web_app: { url: webAppUrl, web_app_setup_closing_behavior: 'hide' } }]
                ]
            },
        });
    }
});

bot.launch();


