   
   
   
    function convert(value){
                
            
       var minutes = value / 60;
           minutes = minutes % 60;
       var hours = Math.floor(value / 3600);
       var seconds = value % 60;

       return(hours.toFixed(0) + ' hours ' + minutes.toFixed(0) + ' min ' + seconds.toFixed(0) + ' sec')
         
    }
 
    
  

   exports.converter = convert; 
  