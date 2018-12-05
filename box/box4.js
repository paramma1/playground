
'use strict';
const fs=require('fs');
 let rawdata = fs.readFileSync('character.json');
 let character =JSON.parse(rawdata);

 var str=" ";
 
 

 var readable=fs.createReadStream("content.txt",
 {
   encoding:'utf8',
   fd:null,
 });


 readable.on('readable',function()

{

  var chunk;

  while(null!==(chunk=readable.read(300)))
  {
    console.log(chunk);
  }

});
