// module which convert time. the function gets seconds from os.uptime module and gives hours, minutes and seconds which are left
var os = require('os');
var time = os.uptime();

    function convert(value){
       var minutes =  value / 60;
           minutes = minutes % 60;
       var hours = Math.floor(value / 3600);
       var seconds = value % 60;

       console.log('Uptime is ' + hours.toFixed(0) + ' hours ' + minutes.toFixed(0) + ' min ' + seconds.toFixed(0) + ' sec')
       
    }
    
  

   exports.converter = convert; 
   exports.t = time;