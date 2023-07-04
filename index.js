import inquirer from 'inquirer';
import qr from 'qr-image';
import fs, { writeFile } from 'fs';

inquirer
    .prompt([{
        "message": "Digite o URL que deseja: ",
        name: "URL"
    }])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr-img.png'));

        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log ("O arquivo foi salvo com sucesso!");
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

