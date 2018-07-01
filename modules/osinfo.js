// here I include ans os module 
var os = require('os');

var type = os.type();
var release = os.release();

// function which shows information abour user's computer 
function getOSinfo(){
    process.stdout.write('Here is  more information about your OS \n');
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    // system type and release 
    console.log('System:', type);
    console.log('Release:', release);
    // cpu model 
    var cpu = os.cpus()[0].model;
    console.log('CPU model:', cpu);
    // uptime 
    var uptime = os.uptime();
    console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    // homdedir and user name 
    var userInfo = os.userInfo();
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
    process.exit();
   
};


exports.print = getOSinfo;