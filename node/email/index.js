//nodemailer 
"use strict";
const nodemailer = require("nodemailer");
const fs = require('fs');
const ejs = require('ejs');
const template = fs.readFileSync('./mail.ejs','utf-8')
const html = ejs.compile(template)
const htmlWithData = html({
    userName:'lqc',
    lists:[0,1,2]
})
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // 创建账户
  let transporter = nodemailer.createTransport({
    service: "qq",
    // host: "smtp.ethereal.email",
    port: 465,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "1358238105@qq.com", // generated ethereal user
      pass: 'mclscukayhopiejb', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <1358238105@qq.com>', // sender address
    to: " 1358238105@qq.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?你好啊", // plain text body
    html: htmlWithData, 
    // 为了调试样式 把html分开 独立出去
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);