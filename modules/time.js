// module which convert time 
var os = require('os');
var time = os.uptime();

    function convert(value){

       var minutes =  (value / 60).toFixed(2);
       
       if(minutes > 60 ){
            var modulo = (minutes % 60).toFixed(0);
            var hours = (minutes / 60).toFixed();
            console.log('uptime is ' + hours + ' hours and  ' + modulo + ' minutes');
           }else{
               console.log('uptime is ' + minutes)
           }

      }


    

    convert(time);