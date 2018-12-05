var fs = require('fs');
module.exports=function(phoneno)
{
    saveTicket();
    updateticketStatus();
}
fs.writeFile('abc.txt', 'paru', function (err) 
{
    if (err) throw err;
    console.log('Saved!');
  });

var  saveTicket=function()
{
    console.log("save ticket");

    };

    
    
       fs.appendFile('abc.txt',' = name',function(err)
       {
             if(err) throw err;
             console.log("status updated");
         });
     
         var updateTicket=function()
         {
             console.log("update ticket");
         }
     
