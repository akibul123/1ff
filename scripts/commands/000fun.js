const fs = require("fs");
module.exports.config = {
  name: "00fun2",
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
	if (event.body.indexOf("@Khalid Bin Oalid")==0 || (event.body.indexOf("@Khalid Bin Oalid")==0 || (event.body.indexOf("I love u")==0 || (event.body.indexOf("I love you")==0)))) {
		var msg = {
				body: "please দয়া করে কোন ছেলে মেনশন দেবেন না 🙏🙏🙂
 এখন কচি কচি মেয়ে পটাতে বিজি আছে 😁😘🥰))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
