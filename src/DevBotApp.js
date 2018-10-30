class DevBotApp {

    /**
     * @public
     */
    constructor() {
        console.log('');
        console.log('[DevBotApp]: Create Application...');
    }

    /**
     * Main event handler
     *
     * @param {Object} msg
     * @param {Object} bot
     * @public
     */
    handleMessage(msg, bot) {

        console.log('');
        console.log(JSON.stringify(msg));

        bot.sendMessage(msg.chat.id, "Here is JSON I've got:");
        bot.sendMessage(msg.chat.id, JSON.stringify(msg), {            
            disable_web_page_preview: true,                        
        });
    }
}

module.exports = DevBotApp;
