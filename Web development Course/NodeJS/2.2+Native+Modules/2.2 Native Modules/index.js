const fs = require("fs");
// fs.writeFile("message.txt", "Hello vanamadi, welcome to Node js world", (err) =>{
//       if(err) throw err;
//       console.log("The File has been saved");
// })

fs.readFile("./message.txt","utf-8" ,(err,data) => {
      if(err) throw err;
      console.log(data);
})