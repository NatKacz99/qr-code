import inquirer from 'inquirer';
import { writeFile } from 'node:fs';
import  qr  from 'qr-image';
import { createWriteStream } from 'node:fs';

const url = [
  {
    type: 'input',
    name: 'page',
    message: 'Type in your URL: '
  }
];

inquirer.prompt(url).then((answers) => {
  const userUrl = answers.page;
writeFile("userInput.txt", userUrl, (err)=> {
  if (err) throw err;
  console.log("The file has been saved.");
});
    console.log(answers);

  var qr_png = qr.image(userUrl, { type: 'png' });
  qr_png.pipe(createWriteStream('qr_img.png'));
});