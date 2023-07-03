import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
      {
            message : "Type in your URL",
            name:"URL"
      }
])
.then((answer) =>
{
      
      const url = answer.URL;
      var qr_image = qr.image(url);
      qr_image.pipe(fs.createWriteStream("qr_image01.png"));
      fs.writeFile("urlForYahoo.txt",url, (err) =>
      {
            if(err) throw err;
            console.log("File has been saved");
      })
      // console.log(answer.URL);
})
.catch((error) =>
{
      if(error.isTtyError){

      }
      else{

      }
});