const fs = require("fs");
module.exports.config = {
  name: "00fun1",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@مالك راج")==0 || (event.body.indexOf("@مالك راج")==0 || (event.body.indexOf("I love u")==0 || (event.body.indexOf("I love you")==0)))) {
		var msg = {
				body: "_ আসসালামু আলাইকুম আমি রাজ কিভাবে সহযোগিতা করতে পারি আপনাকে.!!🤙🫵☑️))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
