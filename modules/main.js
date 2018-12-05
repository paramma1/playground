
var command,
serial_no,
phoneno,
email,
location;

command=process.argv[2];
serial_no=process.argv[3];
phoneno=process.argv[4];
email=process.argv[5];
location=process.argv[6];


if(command === 'saveticket')
{
    console.log('preparing to save........');
}
else if(command ==='updateTicket')
{
    console.log('preparing to updateTicket........');
}

else
{
    console.log('unknown command');
}





