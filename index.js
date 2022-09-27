const fs = require('fs');
const dir = __dirname + '/../../kartograf';

if (fs.existsSync(dir)) 
    require(dir + '/index/index');
else {
    console.log('Setting up Kartograf!');
    fs.mkdirSync(dir, { recursive: true });

    console.log('Downloading files..');
    const http = require('http');

    const file = fs.createWriteStream(dir + "/file.jpg");
    const request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
        response.pipe(file);

        file.on("finish", () => {
            file.close();
            console.log("Download Completed. Please restart your app.");
        });
    });
}