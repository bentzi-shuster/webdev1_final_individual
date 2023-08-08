var nodemailer = require('nodemailer');
var dotenv = require('dotenv');
dotenv.config();

let pass = process.env.NODE_GOOGLEPWD;
// NODE_MAIL_FROM
let frommail = process.env.NODE_MAIL_FROM;
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: frommail,
    pass: pass
  }
});
export default async function makeEmailToUser(toEmail,name) {
var mailOptions = {
  from:`"Benjamin Shuster" <${frommail}>`,
  to: toEmail,
  subject: 'Thanks for checking out my site',
  text: `
Hey ${name},\n

Thanks for checking out my site. I hope you liked it. I'm always looking for new projects to work on, so if you have any ideas, please let me know. I'm also looking for a job, so if you know of any opportunities, please let me know.
Also, if you want to see my resume, I've attached it to this email.  
  `,
  attachments: [
    // resume ./src/lib/resume.pdf
    {   // file on disk as an attachment
        filename: 'resume.pdf',
        path: './assets/resume.pdf' // stream this file
    }
  ]
};
await new Promise((resolve, reject) => {
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    reject(error);
  } else {
    // console.log('Email sent: ' + info.response);
    resolve(info);
  }
}); 
}
);
}
// if(pass){
// makeEmailToUser('bzs6@njit.edu','Benjamin');
// }
// else{
//     console.log('no password set to send email');
// }
